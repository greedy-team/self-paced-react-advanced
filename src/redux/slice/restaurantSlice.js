import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRestaurants, createRestaurant } from "../../api/restaurantsApi";

const initialState = {
    allRestaurants: [],
    selectedRestaurant: null,
    selectedCategory: '전체',
};

export const fetchAllRestaurants = createAsyncThunk(
    'restaurants/fetchAllRestaurants',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchRestaurants();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewRestaurantAndFetch = createAsyncThunk(
    'restaurants/addNewRestaurantAndFetch',
    async (newRestaurantData, { rejectWithValue }) => {
        try {
            await createRestaurant(newRestaurantData);
            const refreshedRestaurants = await fetchRestaurants();
            return refreshedRestaurants;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setAllRestaurants: (state, action) => {
            state.allRestaurants = action.payload;
        },

        setSelectedRestaurant: (state, action) => {
            state.selectedRestaurant = action.payload;
        },

        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllRestaurants.fulfilled, (state, action) => {
                state.allRestaurants = action.payload;
            })
            .addCase(addNewRestaurantAndFetch.fulfilled, (state, action) => {
                state.allRestaurants = action.payload;
            });
    }
});

export const {
    setAllRestaurants,
    setSelectedRestaurant,
    setSelectedCategory,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
