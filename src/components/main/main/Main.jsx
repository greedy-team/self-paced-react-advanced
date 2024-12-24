import Header from '../../common/header/Header';
import CategoryFilter from '../categoryFilter/CategoryFilter';
import RestaurantList from '../restaurant/RestaurantList';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { categoryState } from '../../../recoil/CategoryState';
import { restaurantsState } from '../../../recoil/RestaurantListState';
import { getRestaurant } from '../../../api/restaurant';

const Main = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const [restaurants, setRestaurants] = useRecoilState(restaurantsState);

  useEffect(() => {
    getRestaurant(setRestaurants);
  }, []);

  const filteredRestaurants =
    category === '전체'
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
    </>
  );
};

export default Main;
