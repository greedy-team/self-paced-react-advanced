import { useState } from 'react';
import CategorySortFilter from '../component/body/CategorySortFilter';
import RestaurantList from '../component/body/RestaurantList';

const Body = () => {
  const [category, setCategory] = useState('전체');

  return (
    <>
      <CategorySortFilter category={category} setCategory={setCategory} />
      <RestaurantList category={category} />
    </>
  );
};

export default Body;
