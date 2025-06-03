import { selector } from "recoil";
import { categoryState } from "./CategoryState";

export const filteredRestaurantsSelector = selector({
  key: "filteredRestaurantSelector",
  get: async ({ get }) => {
    const selectedCategory = get(categoryState);

    const response = await fetch("http://localhost:3000/restaurants");
    const data = await response.json();

    return selectedCategory === "all"
      ? data
      : data.filter((restaurant) => restaurant.category === selectedCategory);
  },
});
