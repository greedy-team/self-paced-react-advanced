import { useMemo } from "react";
import getFilteredRestaurant from "../utils/getFilteredRestaurant.js";
import { useRestaurants } from "./useRestaurants.js";
import { useCategories } from "./useCategories.js";

export default function useFilteredRestaurants() {
  const selectedCategory = useCategories((state) => state.selectedCategory);
  const restaurants = useRestaurants((state) => state.restaurants);

  const filtered = useMemo(
    () => getFilteredRestaurant(restaurants, selectedCategory),
    [restaurants, selectedCategory]
  );

  return filtered;
}
