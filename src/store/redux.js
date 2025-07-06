import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../redux/categorySlice.js";
import modalSlice from "../redux/modalSlice.js";
import selectedRestaurantItemSlice from "../redux/selectedRestaurantItemSlice.js";
import restaurantsSlice from "../redux/restaurantsSlice.js";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    selectedRestaurantItem: selectedRestaurantItemSlice,
    category: categorySlice,
    restaurants: restaurantsSlice,
  },
});
