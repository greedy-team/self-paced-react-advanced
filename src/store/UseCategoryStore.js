import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: "전체", 

  setCategory: (newCategory) => set({ category: newCategory }),
}));
