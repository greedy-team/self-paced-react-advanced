import { useState } from "react";
import { ModalContext } from "./ModalContext";

export default function ModalProvider({ children }) {
  // App.jsx에서 관리하던 activeModal 상태를 ModalProvider로 이동
  const [activeModal, setActiveModal] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const value = {
    activeModal,
    setActiveModal,
    selectedRestaurant,
    setSelectedRestaurant,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
