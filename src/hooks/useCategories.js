import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCategories = create(
  persist(
    (set) => ({
      selectedCategory: "전체",
      setCategory: (category) => set({ selectedCategory: category }),
    }),
    {
      name: "categories",
    }
  )
);
