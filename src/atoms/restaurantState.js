import { atom } from 'recoil';

export const restaurantState = atom({
  key: 'restaurantState',
  default: [],
});

export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: '전체',
});
