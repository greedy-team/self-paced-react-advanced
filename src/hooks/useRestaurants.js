import { getRestaurants, postRestaurant } from "../api/restaurants";
import { create } from "zustand";

export const useRestaurants = create((set, get) => ({
  restaurants: [],
  fetchRestaurants: async () => {
    const data = await getRestaurants();
    set({ restaurants: data });
  },

  addRestaurant: async (restaurant) => {
    const newRestaurant = {
      ...restaurant,
      id: Date.now(),
    };
    await postRestaurant(newRestaurant);
  },

  onAddRestaurant: async (restaurant) => {
    await get().addRestaurant(restaurant);
    await get().fetchRestaurants();
  },
}));
