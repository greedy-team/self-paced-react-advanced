import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
    description: "",
  },
};

export const selectedRestaurantItemSlice = createSlice({
  name: "selectedRestaurantItem",
  initialState,
  reducers: {
    setSelectedRestaurantItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedRestaurantItem } =
  selectedRestaurantItemSlice.actions;
export default selectedRestaurantItemSlice.reducer;
