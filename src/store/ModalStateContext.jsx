import { useState } from "react";
import { ModalStateContext } from "./RestaurantContext";

export const ModalStateProvider = ({ children }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const value = {
        isAddModalOpen,
        isModalOpen,
        setIsAddModalOpen,
        setIsModalOpen,
    };

  return (
    <ModalStateContext.Provider value={value}>
      {children}
    </ModalStateContext.Provider>
  );
};
