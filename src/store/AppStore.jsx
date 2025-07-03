import { configureStore } from "@reduxjs/toolkit";
import modalTypeReducer from "./AppSlice.jsx";

export const store = configureStore({
  reducer: {
    modal: modalTypeReducer,
  },
});
