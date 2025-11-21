import { createContext, useState, useMemo } from 'react';

const ModalContext = createContext({
  isRestaurantDetailModalOpen: false,
  setIsRestaurantDetailModalOpen: () => {},
  isAddRestaurantModalOpen: false,
  setIsAddRestaurantModalOpen: () => {},
});

export function ModalProvider({ children }) {
  const [isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen] = useState(false);
  const [isAddRestaurantModalOpen, setIsAddRestaurantModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      isRestaurantDetailModalOpen,
      setIsRestaurantDetailModalOpen,
      isAddRestaurantModalOpen,
      setIsAddRestaurantModalOpen,
    }),
    [isRestaurantDetailModalOpen, isAddRestaurantModalOpen,
      setIsRestaurantDetailModalOpen, setIsAddRestaurantModalOpen],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
