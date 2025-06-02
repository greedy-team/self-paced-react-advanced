import { selector } from 'recoil';
import { categoryState } from './atoms';
import { fetchRestaurants } from '../apis/apis';

export const selectedRestaurantSelector = selector({
  key: 'selectedRestaurantSelector',
  get: ({ get }) => {
    const restaurants = get(restaurantSelector);
    const category = get(categoryState);

    const filteredRestaurants = category === '전체'
      ? restaurants
      : restaurants.filter(restaurant => restaurant.category === category);

    return filteredRestaurants;
  },
});

export const restaurantSelector = selector({
  key: 'restaurantSelector',
  get: async () => {
    const restaurantData = await fetchRestaurants();
    return restaurantData;
  },
});