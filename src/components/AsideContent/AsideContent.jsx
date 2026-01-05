import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';
import useAddRestaurantModalStore from '../../stores/useAddRestaurantModalStore';
import useRestaurantDetailModalStore from '../../stores/useRestaurantDetailModalStore';
import { useRestaurantInfoListQuery, useAddRestaurantInfoMutation } from '../../hooks/useRestaurantInfoList';

export default function AsideContent() {
  const { data: restaurantInfoList, isLoading, isError, error } = useRestaurantInfoListQuery();
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
  const isVisibleRestaurantDetailModal = clickedRestaurantID !== null;

  const getRestaurantInfo = () => {
    if (isLoading) return { name: '로딩중...', description: '' };
    if (isError) return { name: 'Error!', description: error.message };
    return clickedRestaurantInfo;
  };
  const restaurantInfo = getRestaurantInfo();

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
