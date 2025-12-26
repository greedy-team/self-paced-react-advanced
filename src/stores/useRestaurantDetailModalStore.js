import { create } from 'zustand';

const useRestaurantDetailStore = create((set) => ({
  clickedRestaurantID: null,

  updateClickedRestaurantID: (ID) => set({ clickedRestaurantID: ID }),
}));

export default useRestaurantDetailStore;
