import { atom } from 'recoil';

const detailModalState = atom({
  key: 'detailModalState',
  default: false,
});

const addModalState = atom({
  key: 'addModalState',
  default: false,
});

export { detailModalState, addModalState };
