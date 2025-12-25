import { create } from 'zustand';

const useRestaurantDetailStore = create((set) => ({
  clickedRestaurantId: null,

  setClickedId: (id) => set({ clickedRestaurantId: id }),
  clearClickedId: () => set({ clickedRestaurantId: null }),
}));

export default useRestaurantDetailStore;
