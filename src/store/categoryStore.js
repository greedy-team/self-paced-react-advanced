import { create } from "zustand";

const useCategoryStore = create((set) => ({
  selectedCategory: "all",

  setSelectedCategory: (category) =>
    set(() => ({ selectedCategory: category })),
}));

export default useCategoryStore;
