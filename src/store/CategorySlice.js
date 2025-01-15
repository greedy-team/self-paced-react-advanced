import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "전체",
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload;
        }
    }
});

export const {
    changeCategory,
} = categorySlice.actions;

export default categorySlice.reducer;