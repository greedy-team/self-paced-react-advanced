import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';
import useRestaurantInfoListStore from '../../stores/useRestaurantInfoListStore';
import useAddRestaurantModalStore from '../../stores/useAddRestaurantModalStore';
import useRestaurantDetailModalStore from '../../stores/useRestaurantDetailModalStore';

export default function AsideContent() {
  const {
    restaurantInfoList,
    addRestaurantInfo,
  } = useRestaurantInfoListStore();

  const {
    isVisibleAddRestaurantModal,
    closeAddRestaurantModal,
  } = useAddRestaurantModalStore();

  const {
    clickedRestaurantID,
    updateClickedRestaurantID,
  } = useRestaurantDetailModalStore();

  const clickedRestaurantInfo = restaurantInfoList.find(
    (restaurant) => restaurant.id === clickedRestaurantID,
  );
  const isVisibleRestaurantDetailModal = clickedRestaurantInfo !== undefined;

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
        restaurantInfo={clickedRestaurantInfo}
      />
    </aside>
  );
}
