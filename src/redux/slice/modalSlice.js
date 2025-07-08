import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalType: (state, action) => {
            state = action.payload;
        },

        closeModalType: () => {
            state = null;
        }
    }
});

export const { setModalType, closeModalType } = modalSlice.actions;

export default modalSlice.reducer;
