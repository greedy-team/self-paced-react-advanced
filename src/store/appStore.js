import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createModalSlice } from './slices/modalSlice';
import { createRestaurantSlice } from './slices/restaurantSlice';

export const useAppStore = create(
  persist(
    (set) => ({
      ...createRestaurantSlice(set),
      ...createModalSlice(set),
    }),
    {
      name: 'selectedCategory-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ selectedCategory: state.selectedCategory }),
    }
  )
);

export const useRestaurantActions = () =>
  useAppStore((store) => store.restaurantActions);
export const useModalActions = () => useAppStore((store) => store.modalActions);

export const useSelectedCategory = () =>
  useAppStore((store) => store.selectedCategory);
export const useSelectedRestaurant = () =>
  useAppStore((store) => store.selectedRestaurant);

export const useIsAddModalOpen = () =>
  useAppStore((store) => store.isRestaurantAddModalOpen);
export const useIsDetailModalOpen = () =>
  useAppStore((store) => store.isRestaurantDetailModalOpen);
