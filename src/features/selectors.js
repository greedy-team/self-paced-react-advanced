import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredRestaurants = createSelector(
  [
    (state) => state.restaurant.restaurants,
    (state) => state.restaurant.selectedCategory,
  ],
  (restaurants, selectedCategory) =>
    selectedCategory == '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        )
);
