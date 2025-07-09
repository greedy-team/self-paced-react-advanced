import { createSelector } from '@reduxjs/toolkit';

const selectClickedRestaurant = createSelector(
  [
    state => state.restaurant.restaurantsData,
    state => state.restaurant.selectedRestaurantId,
  ],
  (restaurantsData, selectedRestaurantId) => {
    if (!restaurantsData) return null;

    return restaurantsData.find(
      restaurant => restaurant.id === selectedRestaurantId
    );
  }
);

const filteredRestaurantsSelector = createSelector(
  [
    state => state.restaurant.restaurantsData,
    state => state.restaurant.selectedCategory,
  ],
  (restaurantsData, selectedCategory) => {
    if (!restaurantsData) return [];

    const filteredRestaurants =
      selectedCategory === '전체'
        ? restaurantsData
        : restaurantsData.filter(
            restaurant => restaurant.category === selectedCategory
          );

    return filteredRestaurants;
  }
);

export { selectClickedRestaurant, filteredRestaurantsSelector };
