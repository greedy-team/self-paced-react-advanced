import { selector } from "recoil";
import { categoryState } from "./CategoryState";

export const filteredRestaurantsSelector = selector({
  key: "filteredRestaurantSelector",
  get: async ({ get }) => {
    const selectedCategory = get(categoryState);

    try {
      const response = await fetch("http://localhost:3000/restaurants");
      if (!response.ok) {
        throw new Error("잘못된 서버 URL입니다.");
      }
      const data = await response.json();

      return selectedCategory === "all"
        ? data
        : data.filter((restaurant) => restaurant.category === selectedCategory);
    } catch (error) {
      throw new Error("Fetching Error");
    }
  },
});
