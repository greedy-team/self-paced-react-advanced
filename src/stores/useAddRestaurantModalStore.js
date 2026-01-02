import { create } from 'zustand';

const useAddRestaurantModalStore = create((set) => ({
  isVisibleAddRestaurantModal: false,

  showAddRestaurantModal: () => set({ isVisibleAddRestaurantModal: true }),
  closeAddRestaurantModal: () => set({ isVisibleAddRestaurantModal: false }),
}));

export default useAddRestaurantModalStore;
