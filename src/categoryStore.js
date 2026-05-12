import { create } from "zustand";

const useCategoryStore = create((set) => ({
  category: "전체",
  setCategory: (category) => set({ category }),
}));

export default useCategoryStore;
