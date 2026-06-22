import { create } from "zustand";

export const useCategory = create((set) => ({
  category: "전체",
  setCategory: (category) => set({ category }),
}));

