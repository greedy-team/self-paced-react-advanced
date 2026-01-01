import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import RestaurantList from './RestaurantList/RestaurantList';
import useAddRestaurantModalStore from '../../stores/useAddRestaurantModalStore';
import useRestaurantDetailModalStore from '../../stores/useRestaurantDetailModalStore';
import useCategoryStore from '../../stores/useCategoryStore';
import { useRestaurantInfoListQuery } from '../../hooks/useRestaurantInfoList';

export default function MainContent() {
  const category = useCategoryStore((state) => state.category);
  const setCategory = useCategoryStore((state) => state.setCategory);

  const {
    data: restaurantInfoList,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useRestaurantInfoListQuery();

  const showAddRestaurantModal = useAddRestaurantModalStore(
    (state) => state.showAddRestaurantModal,
  );
  const updateClickedRestaurantID = useRestaurantDetailModalStore(
    (state) => state.updateClickedRestaurantID,
  );

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
      {isLoading && <div>로딩 중...</div>}
      {isError && <div>{`에러 발생: ${error.message}`}</div>}
      {isSuccess && (
        <RestaurantList
          restaurantInfoList={filteredRestaurantInfoList}
          onClickItem={updateClickedRestaurantID}
        />
      )}
    </main>
  );
}
