import { useMemo } from "react";
import getFilteredRestaurant from "../utils/getFilteredRestaurant.js";
import { useFetchRestaurants } from "./useRestaurant.js";
import { useCategoryStore } from "../stores/useCategoryStore.js";

export default function useFilteredRestaurants() {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const { restaurants } = useFetchRestaurants();

  const filtered = useMemo(
    () => getFilteredRestaurant(restaurants, selectedCategory),
    [restaurants, selectedCategory]
  );

  return filtered;
}
