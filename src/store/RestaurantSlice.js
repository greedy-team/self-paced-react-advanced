import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

// const addNewRestaurant = async (restaurant) => {
//     try {
//       const response = await fetch("http://localhost:3000/restaurants", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(restaurant),
//       });
//       if (!response.ok) {
//         throw new Error("레스토랑 추가에 문제가 발생했습니다.");
//       }
//       const newRestaurant = await response.json();
//       return newRestaurant;
//     } catch (err) {
//       console.error(err);
//     }
//   };

export const addNewRestaurant = createAsyncThunk(
  "restaurants/addOne",
  async (restaurant, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
      });
      if (!response.ok) {
        throw new Error("레스토랑 추가에 문제가 발생했습니다.");
      }
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
      })

      .addCase(addNewRestaurant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewRestaurant.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addNewRestaurant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default restaurantsSlice.reducer;
