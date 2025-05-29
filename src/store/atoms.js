import { atom } from 'recoil';

export const restaurantsState = atom({
  key: 'restaurantsState',
  default: []
});

export const SelectedRestaurantState = atom({
    key: 'SelectedRestaurantState',
    default: 0,
});

export const CategoryState = atom({
    key: 'CategoryState',
    default: '전체',
})

export const AddModalState = atom({
    key: 'AddModalState',
    default: false,
});

export const InfoModalState = atom({
    key: 'InfoModalState',
    default: false,
});
