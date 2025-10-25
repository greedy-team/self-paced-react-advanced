import { create } from "zustand";

const useModalStore = create((set) => ({
  modal: null,

  setModal: (modalState) => set(() => ({ modal: modalState })),
}));

export default useModalStore;
