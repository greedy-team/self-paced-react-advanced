import { createSlice } from "@reduxjs/toolkit";

const modalTypeSlice = createSlice({
  name: "modalType",
  initialState: { type: null },
  reducers: {
    openAdd: (state) => {
      state.type = "add";
    },
    openDetail: (state) => {
      state.type = "detail";
    },
    close: (state) => {
      state.type = null;
    },
  },
});

export const { openAdd, openDetail, close } = modalTypeSlice.actions;
export default modalTypeSlice.reducer;
