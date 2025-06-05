import { atom } from 'recoil';

export const selectedRestaurantState = atom({
    key: 'SelectedRestaurantState',
    default: 0,
});

export const categoryState = atom({
    key: 'CategoryState',
    default: '전체',
})

export const addModalState = atom({
    key: 'AddModalState',
    default: false,
});

export const infoModalState = atom({
    key: 'InfoModalState',
    default: false,
});
