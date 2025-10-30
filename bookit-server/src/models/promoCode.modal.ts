import mongoose, { Schema, Document } from 'mongoose';

export interface IPromoCode extends Document {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  maxDiscount?: number;
  minOrderValue: number;
  isActive: boolean;
  validFrom: Date;
  validUntil: Date;
  usageLimit?: number;
  usedCount: number;
}

const PromoCodeSchema: Schema = new Schema({
  code: { type: String, required: true, unique: true, uppercase: true },
  discountType: { 
    type: String, 
    enum: ['percentage', 'fixed'], 
    required: true 
  },
  discountValue: { type: Number, required: true },
  maxDiscount: { type: Number },
  minOrderValue: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  validFrom: { type: Date, default: Date.now },
  validUntil: { type: Date, required: true },
  usageLimit: { type: Number },
  usedCount: { type: Number, default: 0 }
});

export default mongoose.model<IPromoCode>('PromoCode', PromoCodeSchema);