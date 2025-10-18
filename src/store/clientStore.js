import { create } from "zustand";

const useClientStore = create((set) => ({
  modal: null,
  selectedCategory: "all",
  selectedRestaurantItem: {
    name: "",
    description: "",
  },

  setModal: (modalState) => set(() => ({ modal: modalState })),
  setSelectedCategory: (category) =>
    set(() => ({ selectedCategory: category })),
  setSelectedRestaurantItem: (item) =>
    set(() => ({ selectedRestaurantItem: item })),
}));

export default useClientStore;
