import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from './restaurantSlice';
import modalSlice from './modalSlice';
import categorySlice from './categorySlice';

const store = configureStore({
  reducer: {
    category: categorySlice,
    restaurants: restaurantSlice,
    modal: modalSlice,
  },
});

export default store;
