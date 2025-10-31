export interface Experience {
  _id: string;
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
  createdAt: string;
}

export interface Slot {
  _id: string;
  experienceId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalCapacity: number;
  bookedCount: number;
  availableSpots: number;
  isActive: boolean;
}

export interface Booking {
  _id: string;
  experienceId: string;
  slotId: string;
  userName: string;
  email: string;
  phone: string;
  numberOfPeople: number;
  promoCode?: string;
  originalPrice: number;
  discount: number;
  finalPrice: number;
  status: 'confirmed' | 'cancelled' | 'pending';
  bookingDate: string;
  bookingId: string;
}

export interface PromoCode {
  _id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  maxDiscount?: number;
  minOrderValue: number;
  isActive: boolean;
  validFrom: string;
  validUntil: string;
}