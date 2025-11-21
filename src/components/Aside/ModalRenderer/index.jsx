import { useContext } from 'react';
import ModalContext from '../../../contexts/ModalContext';
import RestaurantDetailModal from '../RestaurantDetailModal';
import AddRestaurantModal from '../AddRestaurantModal';

function ModalRenderer({ onAddRestaurant }) {
  const { isRestaurantDetailModalOpen, isAddRestaurantModalOpen } = useContext(ModalContext);

  return (
    <>
      {isRestaurantDetailModalOpen && <RestaurantDetailModal />}
      {isAddRestaurantModalOpen && (
        <AddRestaurantModal onAddRestaurant={onAddRestaurant} />
      )}
    </>
  );
}

export default ModalRenderer;
