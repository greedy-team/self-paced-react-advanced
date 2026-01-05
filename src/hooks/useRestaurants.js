import { useQuery } from '@tanstack/react-query';
import restaurantApi from '../api/restaurantApi';
import queryKeys from '../constants/queryKeys';

const useRestaurants = () => useQuery({
  queryKey: queryKeys.restaurants.all,
  queryFn: restaurantApi.fetchAllRestaurants,
  retry: 2,
});

export default useRestaurants;
