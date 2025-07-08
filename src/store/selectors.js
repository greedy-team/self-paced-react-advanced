import { selector } from 'recoil';
import { restaurantsState, selectedCategoryState } from './atoms';

export const filteredRestaurantsSelector = selector({
  key: 'filteredRestaurantsSelector',
  get: ({ get }) => {
    const selectedCategory = get(selectedCategoryState);
    const restaurants = get(restaurantsState);

    return selectedCategory === '전체'
      ? restaurants
      : restaurants.filter((r) => r.category === selectedCategory);
  },
});
