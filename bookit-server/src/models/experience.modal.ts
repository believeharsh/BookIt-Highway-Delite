import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  images: string[];
  location: {
    city: string;
    country: string;
  };
  duration: string;
  category: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  maxGroupSize: number;
  createdAt: Date;
}

const ExperienceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }],
  location: {
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  duration: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 4.5 },
  reviewCount: { type: Number, default: 0 },
  highlights: [{ type: String }],
  included: [{ type: String }],
  notIncluded: [{ type: String }],
  maxGroupSize: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IExperience>("Experience", ExperienceSchema);
