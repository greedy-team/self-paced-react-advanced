export const createModalSlice = (set) => ({
  isRestaurantAddModalOpen: false,
  isRestaurantDetailModalOpen: false,
  modalActions: {
    openRestaurantAddModal: () => set({ isRestaurantAddModalOpen: true }),
    closeRestaurantAddModal: () => set({ isRestaurantAddModalOpen: false }),
    openRestaurantDetailModal: () => set({ isRestaurantDetailModalOpen: true }),
    closeRestaurantDetailModal: () =>
      set({ isRestaurantDetailModalOpen: false }),
  },
});
