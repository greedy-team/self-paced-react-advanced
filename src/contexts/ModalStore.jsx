import { create } from 'zustand';

const useModalStore = create((set) => ({
  isRestaurantDetailModalOpen: false,
  isAddRestaurantModalOpen: false,

  openRestaurantDetailModal: () => set({ isRestaurantDetailModalOpen: true }),
  closeRestaurantDetailModal: () => set({ isRestaurantDetailModalOpen: false }),

  openAddRestaurantModal: () => set({ isAddRestaurantModalOpen: true }),
  closeAddRestaurantModal: () => set({ isAddRestaurantModalOpen: false }),
}));

export default useModalStore;
