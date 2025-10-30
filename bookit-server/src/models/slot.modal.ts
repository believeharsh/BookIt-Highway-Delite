import mongoose, { Schema, Document } from 'mongoose';

export interface ISlot extends Document {
  experienceId: mongoose.Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  totalCapacity: number;
  bookedCount: number;
  availableSpots: number;
  isActive: boolean;
}

const SlotSchema: Schema = new Schema({
  experienceId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Experience', 
    required: true 
  },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  totalCapacity: { type: Number, required: true },
  bookedCount: { type: Number, default: 0 },
  availableSpots: { 
    type: Number, 
    default: function() { 
      return this.totalCapacity; 
    } 
  },
  isActive: { type: Boolean, default: true }
});

// Calculating available spots before saving
SlotSchema.pre<ISlot>('save', function(next) {
  this.availableSpots = this.totalCapacity - this.bookedCount;
  next();
});

export default mongoose.model<ISlot>('Slot', SlotSchema);