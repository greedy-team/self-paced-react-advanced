import { create } from 'zustand';

const useAddRestaurantModalStore = create((set) => ({
  isVisible: false,

  showModal: () => set({ isVisible: true }),
  closeModal: () => set({ isVisible: false }),
}));

export default useAddRestaurantModalStore;
