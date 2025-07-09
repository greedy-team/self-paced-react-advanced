
import { useSelector } from 'react-redux';
import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';

function AsideContainer() {
  const isDetailModalOpen = useSelector(state => state.modal.isDetailModalOpen);
  const isAddModalOpen = useSelector(state => state.modal.isAddModalOpen);

  return (
    <aside>
      {isDetailModalOpen && <RestaurantDetailModal />}
      {isAddModalOpen && <AddRestaurantModal />}
    </aside>
  );
}

export default AsideContainer;
