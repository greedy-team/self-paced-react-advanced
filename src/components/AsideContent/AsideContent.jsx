import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';
import useAddRestaurantModalStore from '../../stores/useAddRestaurantModalStore';
import useRestaurantDetailModalStore from '../../stores/useRestaurantDetailModalStore';
import { useRestaurantInfoListQuery, useAddRestaurantInfoMutation } from '../../hooks/useRestaurantInfoList';

export default function AsideContent() {
  const { data: restaurantInfoList, isLoading, isError } = useRestaurantInfoListQuery();
  const { mutate: addRestaurantInfo } = useAddRestaurantInfoMutation();

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

  const clickedRestaurantInfo = restaurantInfoList?.find(
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
      {!isLoading && !isError && (
        <RestaurantDetailModal
          isVisible={isVisibleRestaurantDetailModal}
          onClose={() => updateClickedRestaurantID(null)}
          restaurantInfo={clickedRestaurantInfo}
        />
      )}
    </aside>
  );
}
