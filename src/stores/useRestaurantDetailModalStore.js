import { create } from 'zustand';

const useRestaurantDetailStore = create((set) => ({
  clickedRestaurantID: null,

  updateClickedRestaurantID: (id) => set({ clickedRestaurantID: id }),
}));

export default useRestaurantDetailStore;
