import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  experienceId: mongoose.Types.ObjectId;
  slotId: mongoose.Types.ObjectId;
  userName: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  promoCode?: string;
  originalPrice: number;
  discount: number;
  finalPrice: number;
  status: 'confirmed' | 'cancelled' | 'pending';
  bookingDate: Date;
  bookingId: string;
}

const BookingSchema: Schema = new Schema({
  experienceId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Experience', 
    required: true 
  },
  slotId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Slot', 
    required: true 
  },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  numberOfPeople: { type: Number, required: true, default: 1 },
  promoCode: { type: String },
  originalPrice: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  finalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['confirmed', 'cancelled', 'pending'], 
    default: 'pending' 
  },
  bookingDate: { type: Date, default: Date.now },
  bookingId: { type: String, required: true, unique: true }
});

export default mongoose.model<IBooking>('Booking', BookingSchema);