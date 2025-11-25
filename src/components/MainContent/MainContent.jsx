import { useState, useContext } from 'react';
import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import RestaurantList from './RestaurantList/RestaurantList';
import { RestaurantInfoListContext } from '../../contexts/RestaurantInfoListContext';
import { AddRestaurantModalContext } from '../../contexts/AddRestaurantModalContext';
import { RestaurantDetailModalContext } from '../../contexts/RestaurantDetailModalContext';

export default function MainContent() {
  const [category, setCategory] = useState('전체');
  const { restaurantInfoList } = useContext(RestaurantInfoListContext);
  const { showAddRestaurantModal } = useContext(AddRestaurantModalContext);
  const { updateClickedRestaurantID } = useContext(RestaurantDetailModalContext);

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
