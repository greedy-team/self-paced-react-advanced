import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRestaurantInfoList, addNewRestaurantInfo } from '../api/restaurantApi';

export const useRestaurantInfoListQuery = () => (
  useQuery({
    queryKey: ['restaurantInfoList'],
    queryFn: getRestaurantInfoList,
    staleTime: 1000 * 60 * 1,
    gcTime: 1000 * 60 * 5,
  })
);

export const useAddRestaurantInfoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['addRestaurantInfo'],
    mutationFn: addNewRestaurantInfo,

    onMutate: async (newInfo) => {
      await queryClient.cancelQueries({ queryKey: ['restaurantInfoList'] });
      const previousData = queryClient.getQueryData(['restaurantInfoList']);

      queryClient.setQueryData(['restaurantInfoList'], (oldData) => [...(oldData || []), newInfo]);

      return { previousData };
    },

    onError: (error, newInfo, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['restaurantInfoList'], context.previousData);
      }
      alert(`${newInfo.name} 추가 실패: ${error.message}`);
    },

    onSettled: () => {
      if (queryClient.isMutating({mutationKey: ['addRestaurant'] }) === 0) {
      queryClient.invalidateQueries({ queryKey: ['restaurantInfoList'] });

      }
    },
  });
};
