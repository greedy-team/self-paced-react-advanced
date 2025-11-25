import { useContext } from 'react';
import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';
import { AddRestaurantModalContext } from '../../contexts/AddRestaurantModalContext';
import { RestaurantDetailModalContext } from '../../contexts/RestaurantDetailModalContext';
import { RestaurantInfoListContext } from '../../contexts/RestaurantInfoListContext';

export default function AsideContent() {
  const {
    isVisibleAddRestaurantModal,
    closeAddRestaurantModal,
  } = useContext(AddRestaurantModalContext);

  const {
    restaurantInfo,
    isVisibleRestaurantDetailModal,
    updateClickedRestaurantID,
  } = useContext(RestaurantDetailModalContext);

  const { addRestaurantInfo } = useContext(RestaurantInfoListContext);

  return (
    <aside>
      <AddRestaurantModal
        isVisible={isVisibleAddRestaurantModal}
        onClose={closeAddRestaurantModal}
        handleAddRestaurantInfo={addRestaurantInfo}
      />
      <RestaurantDetailModal
        isVisible={isVisibleRestaurantDetailModal}
        onClose={() => updateClickedRestaurantID(null)}
        restaurantInfo={restaurantInfo}
      />
    </aside>
  );
}
