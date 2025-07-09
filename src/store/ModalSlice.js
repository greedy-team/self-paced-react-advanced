import { createSlice } from "@reduxjs/toolkit";

const modalTypeSlice = createSlice({
  name: "modalType",
  initialState: { type: null },
  reducers: {
    showAddModal: (state) => {
      state.type = "add";
    },
    showDetailModal: (state) => {
      state.type = "detail";
    },
    hideModal: (state) => {
      state.type = null;
    },
  },
});

export const { showAddModal, showDetailModal, hideModal } =
  modalTypeSlice.actions;
export default modalTypeSlice.reducer;
