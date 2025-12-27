import { create } from "zustand";

const API_URL = "http://localhost:3000/restaurants";

const useRestaurantStore = create((set, get) => ({
  // state
  restaurantList: [],
  category: "전체",
  selected: null,

  // actions
  setCategory: (category) => set({ category }),

  selectRestaurant: (restaurant) => set({ selected: restaurant }),
  deselectRestaurant: () => set({ selected: null }),

  fetchRestaurants: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    set({ restaurantList: data });
  },

  addRestaurant: async ({ name, description, category }) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, category }),
    });

    await get().fetchRestaurants();
  },
}));

export default useRestaurantStore;
