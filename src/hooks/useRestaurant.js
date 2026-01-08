import { useAddRestaurantMutation } from "../query/useRestaurantQuery";
import { useRestaurantQuery } from "../query/useRestaurantQuery";

export function useAddRestaurant() {
  const {
    mutate: addRestaurantMutation,
    isPending,
    error,
    variables,
  } = useAddRestaurantMutation();

  const onAddRestaurant = (restaurant) => {
    return addRestaurantMutation({
      ...restaurant,
      id: Date.now(),
    });
  };

  return {
    onAddRestaurant,
    isPending,
    error,
    variables,
  };
}

export function useFetchRestaurants() {
  const { data: restaurants = [], isLoading, error } = useRestaurantQuery();

  return {
    restaurants,
    isLoading,
    error,
  };
}
