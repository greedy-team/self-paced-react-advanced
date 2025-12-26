import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRestaurantStore = create(
  persist(
    (set) => ({
      selectedRestaurant: null,
      selectedCategory: '전체',

      setSelectedRestaurant: (restaurant) => set({ selectedRestaurant: restaurant }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
    }),
    { name: 'restaurant-storage' },
  ),
);

export default useRestaurantStore;
