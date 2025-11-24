import { useMemo } from "react";
import { useCategoryContext } from "../hooks/useContexts.js";
import { useRestaurantContext } from "../hooks/useContexts.js";
import getFilteredRestaurant from "../utils/getFilteredRestaurant.js";

export default function useFilteredRestaurants() {
  const { selectedCategory } = useCategoryContext();
  const { restaurants } = useRestaurantContext();

  const filtered = useMemo(
    () => getFilteredRestaurant(restaurants, selectedCategory),
    [restaurants, selectedCategory]
  );

  return filtered;
}
