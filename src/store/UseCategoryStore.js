import { create } from "zustand";

export const UseCategoryStore = create((set) => ({
  category: "전체", 

  setCategory: (newCategory) => set({ category: newCategory }),
}));
