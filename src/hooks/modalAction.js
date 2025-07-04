import { useSetRecoilState } from 'recoil';
import {
  isRestaurantDetailModalOpenState,
  selectedRestaurantState,
  isRestaurantAddModalOpenState,
} from '../store/atoms';

export const useRestaurantDetailModalAction = () => {
  const setModalOpen = useSetRecoilState(isRestaurantDetailModalOpenState);
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);

  const openRestaurantDetailModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalOpen(true);
  };

  const closeRestaurantDetailModal = () => {
    setModalOpen(false);
    setSelectedRestaurant(null);
  };

  return { openRestaurantDetailModal, closeRestaurantDetailModal };
};

export const useRestaurantAddModalAction = () => {
  const setModalOpen = useSetRecoilState(isRestaurantAddModalOpenState);

  const openRestaurantAddModal = () => {
    setModalOpen(true);
  };

  const closeRestaurantAddModal = () => {
    setModalOpen(false);
  };

  return { openRestaurantAddModal, closeRestaurantAddModal };
};
