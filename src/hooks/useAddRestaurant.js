import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import restaurantApi from '../api/restaurantApi';
import queryKeys from '../constants/queryKeys';

const useAddRestaurant = (handleClose, resetForm) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: restaurantApi.postRestaurant,

    onMutate: async (newRestaurant) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.restaurants.all });
      const previousRestaurant = queryClient.getQueryData(queryKeys.restaurants.all);

      queryClient.setQueryData(queryKeys.restaurants.all, (prev = []) => [...prev, newRestaurant]);

      handleClose();
      return { previousRestaurants: previousRestaurant };
    },

    onError: (err, newRestaurant, context) => {
      queryClient.setQueryData(queryKeys.restaurants.all, context.previousRestaurants);
      toast.error(`음식점 추가에 실패했어요. 다시 시도해주세요. 😢 (${err.message})`);
    },

    onSuccess: () => {
      resetForm();
      toast.success('식당이 성공적으로 추가되었습니다! 🎉');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.restaurants.all });
    },
  });
};

export default useAddRestaurant;
