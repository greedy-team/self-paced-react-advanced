import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFilteredRestaurants = createAsyncThunk(
  "restaurants/fetchFiltered",
  async (_, { getState }) => {
    const selectedCategory = getState().category.selectedCategory;

    const response = await fetch("http://localhost:3000/restaurants");
    if (!response.ok) {
      throw new Error("서버와 통신에 실패했습니다.");
    }
    const data = await response.json();

    return selectedCategory === "all" || selectedCategory === "선택해 주세요"
      ? data
      : data.filter((restaurant) => restaurant.category === selectedCategory);
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchFilteredRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default restaurantsSlice.reducer;
