import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios';
import type { PromoCode } from '../types';

interface PromoState {
  activePromos: PromoCode[];
  appliedPromo: {
    code: string;
    discount: number;
    finalPrice: number;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: PromoState = {
  activePromos: [],
  appliedPromo: null,
  loading: false,
  error: null,
};

export const validatePromoCode = createAsyncThunk(
  'promo/validatePromoCode',
  async ({ code, orderValue }: { code: string; orderValue: number }) => {
    const response = await axiosInstance.post('/promo/validate', { code, orderValue });
    return response.data.data;
  }
);

export const fetchActivePromos = createAsyncThunk(
  'promo/fetchActivePromos',
  async () => {
    const response = await axiosInstance.get('/promo/active');
    return response.data.data;
  }
);

const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    clearAppliedPromo: (state) => {
      state.appliedPromo = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Validate promo code
    builder.addCase(validatePromoCode.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(validatePromoCode.fulfilled, (state, action) => {
      state.loading = false;
      state.appliedPromo = action.payload;
    });
    builder.addCase(validatePromoCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Invalid promo code';
      state.appliedPromo = null;
    });

    // Fetch active promos
    builder.addCase(fetchActivePromos.fulfilled, (state, action) => {
      state.activePromos = action.payload;
    });
  },
});

export const { clearAppliedPromo } = promoSlice.actions;
export default promoSlice.reducer;