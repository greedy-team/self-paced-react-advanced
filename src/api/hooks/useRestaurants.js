import { useQuery } from '@tanstack/react-query';
import { getRestaurants } from '../api';

export const useRestaurants = (category) => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: getRestaurants,
    select: (data) =>
      category === '전체' ? data : data.filter((r) => r.category === category),
    staleTime: Infinity,
  });
};
