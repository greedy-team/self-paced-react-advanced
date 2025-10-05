import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRestaurants, addNewRestaurant } from '../api/api';

const initialState = {
  restaurants: [],
  getStatus: 'idle',
  getError: null,
  postStatus: 'idle',
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

export const postNewRestaurant = createAsyncThunk(
  'restaurant/postNewRestaurant',
  async (newRestaurant) => {
    await addNewRestaurant(newRestaurant);
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
        state.getStatus = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.getStatus = 'succeeded';
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.getStatus = 'failed';
        state.getError = action.error.message;
      })
      .addCase(postNewRestaurant.pending, (state) => {
        state.postStatus = 'loading';
      })
      .addCase(postNewRestaurant.fulfilled, (state) => {
        state.postStatus = 'succeeded';
      })
      .addCase(postNewRestaurant.rejected, (state) => {
        state.postStatus = 'failed';
      });
  },
});

export const { setSelectedCategory, setSelectedRestaurant } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
