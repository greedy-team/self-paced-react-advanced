import { useMutation, useQueryClient } from '@tanstack/react-query';
import restaurantApi from '../api/restaurantApi';
import queryKeys from '../constants/queryKeys';

const useAddRestaurant = (handleClose) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restaurantApi.postRestaurant,

    onMutate: async (newRestaurant) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.restaurants.all });
      const previousRestaurant = queryClient.getQueryData(queryKeys.restaurants.all);

      queryClient.setQueryData(queryKeys.restaurants.all, (prev = []) => [...prev, newRestaurant]);

      return { previousRestaurants: previousRestaurant };
    },

    onError: (err, newRestaurant, context) => {
      queryClient.setQueryData(queryKeys.restaurants.all, context.previousRestaurants);
    },

    onSuccess: () => {
      if (handleClose) {
        handleClose();
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.restaurants.all });
    },
  });
};

export default useAddRestaurant;
