import { useEffect } from 'react';
import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import RestaurantList from './RestaurantList/RestaurantList';
import useRestaurantInfoListStore from '../../stores/useRestaurantInfoListStore';
import useAddRestaurantModalStore from '../../stores/useAddRestaurantModalStore';
import useRestaurantDetailModalStore from '../../stores/useRestaurantDetailModalStore';
import useCategoryStore from '../../stores/useCategoryStore';

export default function MainContent() {
  const category = useCategoryStore((state) => state.category);
  const setCategory = useCategoryStore((state) => state.setCategory);

  const restaurantInfoList = useRestaurantInfoListStore((state) => state.restaurantInfoList);
  const fetchRestaurantInfoList = useRestaurantInfoListStore(
    (state) => state.fetchRestaurantInfoList,
  );

  const showAddRestaurantModal = useAddRestaurantModalStore(
    (state) => state.showAddRestaurantModal,
  );
  const updateClickedRestaurantID = useRestaurantDetailModalStore(
    (state) => state.updateClickedRestaurantID,
  );

  useEffect(() => {
    fetchRestaurantInfoList();
  }, [fetchRestaurantInfoList]);

  const updateCategory = (categoryToSet) => {
    setCategory(categoryToSet);
  };

  const filteredRestaurantInfoList = (
    category === '전체' ? restaurantInfoList : restaurantInfoList.filter(
      (restaurantInfo) => (restaurantInfo.category === category),
    )
  );

  return (
    <main>
      <GlobalNavigationBar onClickAddButton={showAddRestaurantModal} />
      <CategoryFilter category={category} onChangeCategory={updateCategory} />
      <RestaurantList
        restaurantInfoList={filteredRestaurantInfoList}
        onClickItem={updateClickedRestaurantID}
      />
    </main>
  );
}
