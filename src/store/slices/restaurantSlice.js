import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRestaurantsData,
  postRestaurantData,
} from '../thunks/restaurantThunks';

const initialState = {
  restaurantsData: null,
  selectedRestaurantId: '',
  selectedCategory: '전체',
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurantsData: (state, action) => {
      state.restaurantsData = action.payload;
    },
    setSelectedRestaurantId: (state, action) => {
      state.selectedRestaurantId = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchRestaurantsData.fulfilled, (state, action) => {
      state.restaurantsData = action.payload;
    });
    builder.addCase(postRestaurantData.fulfilled, (state, action) => {
      if (state.restaurantsData) {
        state.restaurantsData.push(action.payload);
      } else {
        state.restaurantsData = [action.payload];
      }
    });
  },
});

export const {
  setRestaurantsData,
  setSelectedRestaurantId,
  setSelectedCategory,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
