import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from './slices/restaurantSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
    modal: modalSlice,
  },
});

export default store;
