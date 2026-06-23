import { create } from "zustand";

const useModalStore = create((set) => ({
  activeModal: null, // null, "detail", "add"
  selectedRestaurant: null,

  openDetailModal: (restaurant) => {
    set({ selectedRestaurant: restaurant, activeModal: "detail" });
  },

  openAddModal: () => {
    set({ activeModal: "add" });
  },

  closeModal: () => {
    //openDetailModal과 일관성을 위해서 selectedRestaurant도 초기화
    set({ selectedRestaurant: null, activeModal: null });
  },
}));

export default useModalStore;
