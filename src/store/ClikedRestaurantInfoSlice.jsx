import { createSlice } from "@reduxjs/toolkit";

const clickedRestaurantInfoSlice = createSlice({
  name: "clickedRestaurantInfo",
  initialState: null,
  reducers: {
    setClickedRestaurantInfo: (state, action) => action.payload,
  },
});

export const { setClickedRestaurantInfo } = clickedRestaurantInfoSlice.actions;
export default clickedRestaurantInfoSlice.reducer;
