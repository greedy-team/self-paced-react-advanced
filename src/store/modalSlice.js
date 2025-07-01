import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addModalState: false,
  infoModalState: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setAddModal: (state, action) => {
      state.addModalState = action.payload;
    },
    setInfoModal: (state, action) => {
      state.infoModalState = action.payload;
    },
  },
});

export const { setAddModal, setInfoModal } = modalSlice.actions;
export default modalSlice.reducer;
