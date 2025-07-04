import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRestaurants } from '../api/api';

const initialState = {
  restaurants: [],
  status: 'idle',
  error: null,
  selectedCategory: '전체',
  selectedRestaurant: null,
};

export const fetchRestaurants = createAsyncThunk(
  'restaurant/fetchRestaurants',
  async () => {
    const data = await getRestaurants();
    return data;
  }
);

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCategory, setSelectedRestaurant } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
