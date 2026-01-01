import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRestaurantInfoList, addNewRestaurantInfo } from '../api/restaurantApi';

export const useRestaurantInfoListQuery = () => (
  useQuery({
    queryKey: ['restaurantInfoList'],
    queryFn: getRestaurantInfoList,
  })
);

export const useAddRestaurantInfoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addNewRestaurantInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurantInfoList'] });
    },
  });
};
