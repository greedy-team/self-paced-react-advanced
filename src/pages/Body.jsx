import { Suspense } from 'react';
import CategorySortFilter from '../component/body/CategorySortFilter';
import RestaurantList from '../component/body/RestaurantList';

const Body = () => {
  return (
    <>
      <CategorySortFilter />
      <Suspense fallback={<div>Loading restaurant list...</div>}>
        <RestaurantList />
      </Suspense>
    </>
  );
};

export default Body;
