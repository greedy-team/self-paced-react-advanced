import { atom } from 'recoil';

const categoryState = atom({
  key: 'categoryState',
  default: '전체',
});

export { categoryState };
