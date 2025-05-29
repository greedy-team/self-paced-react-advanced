import { selector } from 'recoil';
import { CategoryState, restaurantsState } from './atoms';

export const SelectedRestaurantSelector = selector({
  key: 'SelectedRestaurantSelector',
  get: ({ get }) => {
    const restaurants = get(restaurantsState);
    const category = get(CategoryState);

    const filteredRestaurants = category === '전체'
      ? restaurants
      : restaurants.filter(restaurant => restaurant.category === category);

    return filteredRestaurants;
  },
});