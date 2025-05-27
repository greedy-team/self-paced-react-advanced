import { useContext } from 'react';
import { RestaurantContext } from '../store/RestaurantContext';

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('RestaurantContext 에러 발생');
  }
  return context;
};