import { create } from 'zustand';
import { createModalSlice } from './slices/modalSlice';
import { createRestaurantSlice } from './slices/restaurantSlice';

export const useAppStore = create((set) => ({
  ...createRestaurantSlice(set),
  ...createModalSlice(set),
}));

export const useRestaurantActions = () =>
  useAppStore((store) => store.restaurantActions);
export const useModalActions = () => useAppStore((store) => store.modalActions);

export const useRestaurants = () => useAppStore((store) => store.restaurants);
export const useGetStatus = () => useAppStore((store) => store.getStatus);
export const usePostStatus = () => useAppStore((store) => store.postStatus);
export const useSelectedCategory = () =>
  useAppStore((store) => store.selectedCategory);
export const useSelectedRestaurant = () =>
  useAppStore((store) => store.selectedRestaurant);

export const useIsAddModalOpen = () =>
  useAppStore((store) => store.isRestaurantAddModalOpen);
export const useIsDetailModalOpen = () =>
  useAppStore((store) => store.isRestaurantDetailModalOpen);
