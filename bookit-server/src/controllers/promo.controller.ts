import { Request, Response } from 'express';
import PromoCodeSchema from '../models/promoCode.modal' ; 

// POST /api/promo/validate - Validate promo code
export const validatePromoCode = async (req: Request, res: Response) => {
  try {
    const { code, orderValue } = req.body;

    if (!code || !orderValue) {
      return res.status(400).json({
        success: false,
        message: 'Code and order value are required'
      });
    }

    // Find promo code
    const promo = await PromoCodeSchema.findOne({ 
      code: code.toUpperCase(),
      isActive: true
    });

    if (!promo) {
      return res.status(404).json({
        success: false,
        message: 'Invalid or expired promo code'
      });
    }

    // Check if promo is still valid (date range)
    const now = new Date();
    if (now < promo.validFrom || now > promo.validUntil) {
      return res.status(400).json({
        success: false,
        message: 'Promo code expired'
      });
    }

    // Check minimum order value
    if (orderValue < promo.minOrderValue) {
      return res.status(400).json({
        success: false,
        message: `Minimum order value of ₹${promo.minOrderValue} required`
      });
    }

    // Check usage limit
    if (promo.usageLimit && promo.usedCount >= promo.usageLimit) {
      return res.status(400).json({
        success: false,
        message: 'Promo code usage limit reached'
      });
    }

    // Calculate discount
    let discount = 0;
    
    if (promo.discountType === 'percentage') {
      discount = (orderValue * promo.discountValue) / 100;
      // Apply max discount cap if exists
      if (promo.maxDiscount && discount > promo.maxDiscount) {
        discount = promo.maxDiscount;
      }
    } else if (promo.discountType === 'fixed') {
      discount = promo.discountValue;
    }

    const finalPrice = orderValue - discount;

    res.status(200).json({
      success: true,
      message: 'Promo code applied successfully',
      data: {
        code: promo.code,
        discountType: promo.discountType,
        discountValue: promo.discountValue,
        discount,
        originalPrice: orderValue,
        finalPrice
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error validating promo code',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// GET /api/promo/active - Get all active promo codes
export const getActivePromoCodes = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const promoCodes = await PromoCodeSchema.find({
      isActive: true,
      validFrom: { $lte: now },
      validUntil: { $gte: now }
    }).select('-usedCount -usageLimit');

    res.status(200).json({
      success: true,
      data: promoCodes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching promo codes',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};