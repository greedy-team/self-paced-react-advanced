import { combineReducers } from "redux";
import categorySlice from "./categorySlice.js";
import modalSlice from "./modalSlice.js";
import selectedRestaurantItemSlice from "./selectedRestaurantItemSlice.js";
import restaurantsSlice from "./restaurantsSlice.js";

const rootReducer = combineReducers({
  modal: modalSlice,
  selectedRestaurantItem: selectedRestaurantItemSlice,
  category: categorySlice,
  restaurants: restaurantsSlice,
});

export default rootReducer;
