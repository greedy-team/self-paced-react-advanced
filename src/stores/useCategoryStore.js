import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCategoryStore = create(
  persist(
    (set) => ({
      category: '전체',

      setCategory: (inCategory) => set({ category: inCategory }),
    }),
    {
      name: 'restaurant-filter-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCategoryStore;
