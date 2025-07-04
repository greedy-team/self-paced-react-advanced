import { configureStore } from "@reduxjs/toolkit";
import modalTypeReducer from "./ModalSlice.jsx";
import restaurantsReducer from "./RestaurantSlice.jsx";
import categoryReducer from "./CategorySlice.jsx";
import clickedRestaurantInfoReducer from "./ClikedRestaurantInfoSlice.jsx";

export const store = configureStore({
  reducer: {
    modal: modalTypeReducer,
    restaurants: restaurantsReducer,
    clickedRestaurantInfo: clickedRestaurantInfoReducer,
    category: categoryReducer,
  },
});
