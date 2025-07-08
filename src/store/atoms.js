import { atom, selector } from 'recoil';
import { getRestaurants } from '../api/api';

export const restaurantsState = atom({
  key: 'restaurantsState',
  default: selector({
    key: 'restaurantsStateDefault',
    get: async () => {
      try {
        const data = await getRestaurants();
        return data;
      } catch (error) {
        console.error('레스토랑 목록 불러오기 실패:', error);
        return [];
      }
    },
  }),
});

export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: '전체',
});

export const selectedRestaurantState = atom({
  key: 'selectedRestaurantState',
  default: null,
});

export const isRestaurantDetailModalOpenState = atom({
  key: 'isRestaurantDetailModalOpenState',
  default: false,
});

export const isRestaurantAddModalOpenState = atom({
  key: 'isRestaurantAddModalOpenState',
  default: false,
});

export const restaurantsRefreshState = selector({
  key: 'restaurantsRefreshState',
  get: ({ get }) => get(restaurantsState),
  set: ({ set }, newValue) => {
    set(restaurantsState, newValue);
  },
});
