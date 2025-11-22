import {
  createContext, useState, useMemo, useContext,
} from 'react';

const ModalContext = createContext(null);

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

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error('useModalContext는 ModalProvider 내에서 사용되어야 합니다.');
  }
  return context;
};

export default ModalContext;
