import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRestaurants, postRestaurant } from "../api/restaurants";

const RESTAURANTS_QUERY_KEY = ["restaurants"];

export function useRestaurantQuery() {
  return useQuery({
    queryKey: RESTAURANTS_QUERY_KEY,
    queryFn: getRestaurants,
  });
}

export function useAddRestaurantMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postRestaurant,

    onMutate: async (newRestaurant) => {
      await queryClient.cancelQueries({ queryKey: RESTAURANTS_QUERY_KEY });

      const previousRestaurants = queryClient.getQueryData(
        RESTAURANTS_QUERY_KEY
      );

      queryClient.setQueryData(RESTAURANTS_QUERY_KEY, (old) => [
        ...old,
        newRestaurant,
      ]);

      return { previousRestaurants };
    },
    onError: (err, newRestaurant, context) => {
      queryClient.setQueryData(
        RESTAURANTS_QUERY_KEY,
        context.previousRestaurants
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: RESTAURANTS_QUERY_KEY });
    },
  });
}
