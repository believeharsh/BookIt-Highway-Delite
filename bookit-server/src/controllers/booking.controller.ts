import { Request, Response } from 'express';
import BookingSchema from '../models/bookings.modal'
import SlotSchema from '../models/slot.modal' ; 
import mongoose from 'mongoose';

// POST /api/bookings - Create new booking
export const createBooking = async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      experienceId,
      slotId,
      userName,
      email,
      phone,
      numberOfPeople,
      promoCode,
      originalPrice,
      discount,
      finalPrice
    } = req.body;

    // Validate required fields
    if (!experienceId || !slotId || !userName || !email || !phone || !numberOfPeople) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Check if slot exists and has availability
    const slot = await SlotSchema.findById(slotId).session(session);
    
    if (!slot) {
      await session.abortTransaction();
      return res.status(404).json({
        success: false,
        message: 'Slot not found'
      });
    }

    // Check if slot has enough capacity
    if (slot.availableSpots < numberOfPeople) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: `Only ${slot.availableSpots} spots available`
      });
    }

    // Generate unique booking ID
    const bookingId = `BK${Date.now()}${Math.floor(Math.random() * 1000)}`;

    // Create booking
    const booking = new BookingSchema({
      experienceId,
      slotId,
      userName,
      email,
      phone,
      numberOfPeople,
      promoCode: promoCode || null,
      originalPrice,
      discount: discount || 0,
      finalPrice,
      status: 'confirmed',
      bookingId
    });

    await booking.save({ session });

    // Update slot capacity (CRITICAL: Prevent double booking)
    slot.bookedCount += numberOfPeople;
    slot.availableSpots = slot.totalCapacity - slot.bookedCount;
    
    if (slot.availableSpots <= 0) {
      slot.isActive = false;
    }

    await slot.save({ session });

    // Commit transaction
    await session.commitTransaction();

    // Populate experience and slot details for response
    await booking.populate('experienceId slotId');

    res.status(201).json({
      success: true,
      message: 'Booking confirmed successfully',
      data: booking
    });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  } finally {
    session.endSession();
  }
};

// GET /api/bookings/:bookingId - Get booking by bookingId
export const getBookingByBookingId = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.params;

    const booking = await BookingSchema.findOne({ bookingId })
      .populate('experienceId')
      .populate('slotId');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching booking',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};