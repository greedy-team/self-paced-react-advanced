import { useContext } from 'react';
import { ModalStateContext } from '../store/RestaurantContext';

export const useModalStateContext = () => {
  const context = useContext(ModalStateContext);
  if (!context) {
    throw new Error('ModalStateContext 에러 발생');
  }
  return context;
};