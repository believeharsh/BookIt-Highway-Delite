import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios';
import type { Experience, Slot } from '../types';

interface ExperienceState {
  experiences: Experience[];
  selectedExperience: Experience | null;
  availableSlots: Slot[];
  categories: string[];
  loading: boolean;
  error: string | null;
  filters: {
    search: string;
    category: string;
    minPrice: number | null;
    maxPrice: number | null;
    location: string;
  };
}

const initialState: ExperienceState = {
  experiences: [],
  selectedExperience: null,
  availableSlots: [],
  categories: [],
  loading: false,
  error: null,
  filters: {
    search: '',
    category: '',
    minPrice: null,
    maxPrice: null,
    location: '',
  },
};

// Async thunks
export const fetchExperiences = createAsyncThunk(
  'experience/fetchExperiences',
  async (filters?: any) => {
    const params = new URLSearchParams();
    if (filters?.search) params.append('search', filters.search);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.minPrice) params.append('minPrice', filters.minPrice);
    if (filters?.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters?.location) params.append('location', filters.location);

    const response = await axiosInstance.get(`/experiences?${params.toString()}`);
    return response.data.data;
  }
);

export const fetchExperienceById = createAsyncThunk(
  'experience/fetchExperienceById',
  async (id: string) => {
    const response = await axiosInstance.get(`/experiences/${id}`);
    return response.data.data;
  }
);

export const fetchCategories = createAsyncThunk(
  'experience/fetchCategories',
  async () => {
    const response = await axiosInstance.get('/experiences/categories');
    return response.data.data;
  }
);

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<ExperienceState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    clearSelectedExperience: (state) => {
      state.selectedExperience = null;
      state.availableSlots = [];
    },
  },
  extraReducers: (builder) => {
    // Fetch experiences
    builder.addCase(fetchExperiences.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchExperiences.fulfilled, (state, action) => {
      state.loading = false;
      state.experiences = action.payload;
    });
    builder.addCase(fetchExperiences.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch experiences';
    });

    // Fetch experience by ID
    builder.addCase(fetchExperienceById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchExperienceById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedExperience = action.payload.experience;
      state.availableSlots = action.payload.availableSlots;
    });
    builder.addCase(fetchExperienceById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch experience details';
    });

    // Fetch categories
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setFilters, clearFilters, clearSelectedExperience } = experienceSlice.actions;
export default experienceSlice.reducer;