import { atom } from 'recoil';

const selectedRestaurantState = atom({
  key: 'selectedRestaurantState',
  default: {
    name: '',
    description: '',
  },
});

export { selectedRestaurantState };
