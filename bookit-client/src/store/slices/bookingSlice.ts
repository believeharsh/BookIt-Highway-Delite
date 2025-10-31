import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios';
import type { Booking } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  currentBooking: Booking | null;
  bookingData: {
    experienceId: string;
    slotId: string;
    userName: string;
    email: string;
    phone: string;
    numberOfPeople: number;
    promoCode: string;
    originalPrice: number;
    discount: number;
    finalPrice: number;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  currentBooking: null,
  bookingData: null,
  loading: false,
  error: null,
};

export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (bookingData: any) => {
    const response = await axiosInstance.post('/bookings', bookingData);
    return response.data.data;
  }
);

export const fetchBookingById = createAsyncThunk(
  'booking/fetchBookingById',
  async (bookingId: string) => {
    const response = await axiosInstance.get(`/bookings/${bookingId}`);
    return response.data.data;
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingData: (state, action: PayloadAction<any>) => {
      state.bookingData = action.payload;
    },
    clearBookingData: (state) => {
      state.bookingData = null;
      state.currentBooking = null;
    },
  },
  extraReducers: (builder) => {
    // Create booking
    builder.addCase(createBooking.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBooking = action.payload;
    });
    builder.addCase(createBooking.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to create booking';
    });

    // Fetch booking by ID
    builder.addCase(fetchBookingById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBookingById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBooking = action.payload;
    });
    builder.addCase(fetchBookingById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch booking';
    });
  },
});

export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;