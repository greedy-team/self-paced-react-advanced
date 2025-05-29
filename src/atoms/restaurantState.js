import { atom, selector, useRecoilCallback } from 'recoil';
import { createRestaurant } from '../api/restaurantsApi';

export const openModalState = atom({
  key: 'openModalState',
  default: null,
});

export const restaurantState = atom({
  key: 'restaurantState',
  default: [],
});

export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: '전체',
});

export const selectedRestaurantState = atom({
  key: 'selectedRestaurantState',
  default: null,
})

export const filteredRestaurantState = selector({
  key: 'filteredRestaurantState',
  get: ({ get }) => {
    const list = get(restaurantState);
    const category = get(selectedCategoryState);
    return category === '전체'
      ? list
      : list.filter(restaurant => restaurant.category === category);
  },
});

export const useAddRestaurant = () =>
  useRecoilCallback(({ snapshot, set }) =>
    async (newItem) => {
      const created = await createRestaurant(newItem);
      const prev = await snapshot.getPromise(restaurantState);
      set(restaurantState, [...prev, created]);
    }, [],);
