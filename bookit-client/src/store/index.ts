import { configureStore } from '@reduxjs/toolkit';
import experienceReducer from './slices/experienceSlice';
import bookingReducer from './slices/bookingSlice';
import promoReducer from './slices/promoSlice';

export const store = configureStore({
  reducer: {
    experience: experienceReducer,
    booking: bookingReducer,
    promo: promoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;