import { atom } from 'recoil';

const restaurantsState = atom({
  key: 'restaurantsState',
  default: [],
});

export { restaurantsState };
