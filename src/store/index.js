import { configureStore } from "@reduxjs/toolkit";
import modalTypeReducer from "./ModalSlice.js";
import restaurantsReducer from "./RestaurantSlice.js";
import categoryReducer from "./CategorySlice.js";
import clickedRestaurantInfoReducer from "./ClikedRestaurantInfoSlice.js";

export const store = configureStore({
  reducer: {
    modal: modalTypeReducer,
    restaurants: restaurantsReducer,
    clickedRestaurantInfo: clickedRestaurantInfoReducer,
    category: categoryReducer,
  },
});
