import { create } from "zustand";
import { persist } from "zustand/middleware";

const RESTAURANTS_API_URL = "http://localhost:3000/restaurants";

export const useRestaurantStore = create(
  persist(
    (set) => ({
      // --- Data 상태 ---
      restaurants: [],
      error: null,

      // 데이터 조회 액션
      fetchRestaurants: async () => {
        try {
          set({ error: null }); // 재시도 시 이전 에러 초기화
          const response = await fetch(RESTAURANTS_API_URL);
          if (!response.ok) throw new Error("데이터 불러오기 실패");
          const restaurantData = await response.json();
          set({ restaurants: restaurantData });
        } catch (error) {
          console.error(
            "음식점 데이터를 불러오는 중 오류가 발생했습니다:",
            error,
          );
          set({
            error: "음식점 목록을 불러오지 못했어요. 잠시 후 다시 시도해주세요.",
          });
        }
      },

      // 음식점 추가 액션
      addRestaurant: async (newRestaurant) => {
        try {
          const response = await fetch(RESTAURANTS_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRestaurant),
          });
          if (!response.ok) throw new Error("추가 실패");
          const createdRestaurant = await response.json();
          set((state) => ({
            restaurants: [...state.restaurants, createdRestaurant],
          }));
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },

      // --- UI 상태 ---
      category: "전체",
      isAddModalOpen: false,
      selectedRestaurant: null,

      // UI 컨트롤 액션
      setCategory: (category) => set({ category }),
      setIsAddModalOpen: (isOpen) => set({ isAddModalOpen: isOpen }),
      setSelectedRestaurant: (restaurant) =>
        set({ selectedRestaurant: restaurant }),
    }),
    {
      name: "restaurant-storage", // localStorage에 저장될 키 이름
      partialize: (state) => ({ category: state.category }), // 카테고리 상태만 유지 (선택 요구사항)
    },
  ),
);
