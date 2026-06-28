import { create } from "zustand";

const BASE_URL = "http://localhost:3000/restaurants";

const useRestaurantStore = create((set, get) => ({
  category: "전체",
  restaurants: [],

  actions: {
    setCategory: (category) => {
      set({ category });
    },

    fetchRestaurants: async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        if (!response.ok) throw data;
        set({ restaurants: data });
      } catch (error) {
        console.error(
          "음식점 데이터를 불러오는 중 오류가 발생했습니다.",
          error,
        );
        alert(
          "음식점 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
        );
      }
    },

    addRestaurant: async (restaurant) => {
      try {
        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(restaurant),
        });
        const data = await response.json();
        if (!response.ok) throw data;
        // 추가 후 목록을 다시 받아 최신 상태로 갱신
        await get().actions.fetchRestaurants();
      } catch (error) {
        console.error("음식점을 추가하는 중 오류가 발생했습니다.", error);
        alert("음식점 추가에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        throw error;
      }
    },
  },
}));

export const useCategory = () => useRestaurantStore((state) => state.category);
export const useRestaurants = () =>
  useRestaurantStore((state) => state.restaurants);

export const useSetCategory = () =>
  useRestaurantStore((state) => state.actions.setCategory);
export const useFetchRestaurants = () =>
  useRestaurantStore((state) => state.actions.fetchRestaurants);
export const useAddRestaurant = () =>
  useRestaurantStore((state) => state.actions.addRestaurant);
