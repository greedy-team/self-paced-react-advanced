import { createContext, useState, useCallback, useMemo } from 'react';

export const AddRestaurantModalContext = createContext(null);

export function AddRestaurantModalProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const showAddRestaurantModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const closeAddRestaurantModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const value = useMemo(
    () => ({
      isVisible,
      showAddRestaurantModal,
      closeAddRestaurantModal,
    }),
    [isVisible, showAddRestaurantModal, closeAddRestaurantModal],
  );

  return (
    <AddRestaurantModalContext.Provider value={value}>
      {children}
    </AddRestaurantModalContext.Provider>
  );
}
