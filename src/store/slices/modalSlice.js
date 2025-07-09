import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddModalOpen: false,
  isDetailModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsAddModalOpen: (state, action) => {
      state.isAddModalOpen = action.payload;
    },
    setIsDetailModalOpen: (state, action) => {
      state.isDetailModalOpen = action.payload;
    },
  },
});

export const { setIsAddModalOpen, setIsDetailModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
