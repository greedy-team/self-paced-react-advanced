import { create } from "zustand";

const useRestaurantStore = create((set) => ({
  selectedRestaurantItem: undefined,

  setSelectedRestaurantItem: (restaurant) =>
    set(() => ({ selectedRestaurantItem: restaurant })),
}));

export default useRestaurantStore;
