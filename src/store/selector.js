import { selector } from 'recoil';
import { categoryState, restaurantsState } from './atoms';

export const selectedRestaurantSelector = selector({
  key: 'SelectedRestaurantSelector',
  get: ({ get }) => {
    const restaurants = get(restaurantsState);
    const category = get(categoryState);

    const filteredRestaurants = category === '전체'
      ? restaurants
      : restaurants.filter(restaurant => restaurant.category === category);

    return filteredRestaurants;
  },
});