import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const fetchRestaurants = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/restaurants");
//     if (!response.ok)
//       throw new Error("레스토랑 목록을 불러오는데 문제가 발생했습니다.");
//     const data = await response.json();
//     dispatch(setRestaurants(data));
//   } catch (err) {
//     console.error(err);
//   }
// };

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants");
      if (!response.ok)
        throw new Error("레스토랑 목록을 불러오는데 문제가 발생했습니다.");
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setRestaurants: (state, action) => {
      return action.payload;
    },
    addRestaurant: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setRestaurants, addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
