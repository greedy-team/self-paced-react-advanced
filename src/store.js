import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modalSlice';
import restaurantReducer from './features/restaurantSlice';

export const store = configureStore({
  reducer: { modal: modalReducer, restaurant: restaurantReducer },
});
