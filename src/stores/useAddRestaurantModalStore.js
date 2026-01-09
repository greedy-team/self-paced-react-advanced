import { create } from 'zustand';

const useAddRestaurantModalStore = create((set) => ({
  isAddRestaurantModalVisible: false,

  showAddRestaurantModal: () => set({ isAddRestaurantModalVisible: true }),
  closeAddRestaurantModal: () => set({ isAddRestaurantModalVisible: false }),
}));

export default useAddRestaurantModalStore;
