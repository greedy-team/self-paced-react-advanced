import { useState } from "react";
import { ModalContext } from "./ModalContext";

export default function ModalProvider({ children }) {
  // App.jsx에서 관리하던 activeModal 상태를 ModalProvider로 이동
  const [activeModal, setActiveModal] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const openDetailModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setActiveModal("detail");
  };

  const openAddModal = () => {
    setActiveModal("add");
  };

  const closeModal = () => {
    //openDetailModal과 일관성을 위해서 selectedRestaurant도 초기화
    setSelectedRestaurant(null);
    setActiveModal(null);
  };

  const value = {
    activeModal,
    selectedRestaurant,
    openDetailModal,
    openAddModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
