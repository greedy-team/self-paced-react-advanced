import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRestaurantAddModalOpen: false,
  isRestaurantDetailModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openRestaurantAddModal: (state) => {
      state.isRestaurantAddModalOpen = true;
    },
    closeRestaurantAddModal: (state) => {
      state.isRestaurantAddModalOpen = false;
    },
    openRestaurantDetailModal: (state) => {
      state.isRestaurantDetailModalOpen = true;
    },
    closeRestaurantDetailModal: (state) => {
      state.isRestaurantDetailModalOpen = false;
    },
  },
});

export const {
  openRestaurantAddModal,
  closeRestaurantAddModal,
  openRestaurantDetailModal,
  closeRestaurantDetailModal,
} = modalSlice.actions;
export default modalSlice.reducer;
