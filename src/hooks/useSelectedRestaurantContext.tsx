import { useContext } from 'react';
import { SelectedRestaurantContext } from '../store/RestaurantContext';

export const useSelectedRestaurantContext = () => {
  const context = useContext(SelectedRestaurantContext);
  if (!context) {
    throw new Error('SelectedRestaurantContext 에러 발생');
  }
  return context;
};