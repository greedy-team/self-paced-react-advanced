import { createSelector } from "@reduxjs/toolkit";

// export const filteredRestaurantsState = selector({
//     key: "filterdRestaurantsState",
//     get: ({ get }) => {
//       const all = get(restaurantsState);
//       const category = get(categoryState);
//       if (category === "전체") return all;
//       return all.filter((r) => r.category === category);
//     },
//   });

export const selectRestaurants = (state) => state.restaurants;
export const selectCategory = (state) => state.category;

export const selectFilteredRestaurants = createSelector(
  [selectRestaurants, selectCategory],
  (restaurants, category) => {
    if (category === "전체") return restaurants;
    return restaurants.filter((r) => r.category === category);
  }
);
