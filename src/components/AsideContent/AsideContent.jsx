import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';
import useRestaurantInfoListStore from '../../stores/useRestaurantInfoListStore';
import useAddRestaurantModalStore from '../../stores/useAddRestaurantModalStore';
import useRestaurantDetailModalStore from '../../stores/useRestaurantDetailModalStore';

export default function AsideContent() {
  const restaurantInfoList = useRestaurantInfoListStore((state) => state.restaurantInfoList);
  const addRestaurantInfo = useRestaurantInfoListStore((state) => state.addRestaurantInfo);

  const isVisibleAddRestaurantModal = useAddRestaurantModalStore(
    (state) => state.isVisibleAddRestaurantModal,
  );
  const closeAddRestaurantModal = useAddRestaurantModalStore(
    (state) => state.closeAddRestaurantModal,
  );

  const clickedRestaurantID = useRestaurantDetailModalStore(
    (state) => state.clickedRestaurantID,
  );
  const updateClickedRestaurantID = useRestaurantDetailModalStore(
    (state) => state.updateClickedRestaurantID,
  );

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
