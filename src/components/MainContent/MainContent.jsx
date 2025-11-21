import { useState } from 'react';
import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import RestaurantList from './RestaurantList/RestaurantList';

export default function MainContent({ restaurantInfoList }) {
  const [category, setCategory] = useState('전체');

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
      <GlobalNavigationBar />
      <CategoryFilter category={category} onChangeCategory={updateCategory} />
      <RestaurantList
        restaurantInfoList={filteredRestaurantInfoList}
      />
    </main>
  );
}
