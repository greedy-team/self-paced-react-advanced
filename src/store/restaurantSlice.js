import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRestaurants } from '../apis/apis';

export const fetchLists = createAsyncThunk(
  'fetchRestaurantList',
  async () => {
    const data = await fetchRestaurants();
    return data;
  }
);

const initialState = {
  list: [],
  selectedRestaurant: 0,
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setSelectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
