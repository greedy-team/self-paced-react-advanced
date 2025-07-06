import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: [],
  reducers: {
    setRestaurants: (state, action) => {
      return action.payload;
    },
    addRestaurant: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { setRestaurants, addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
