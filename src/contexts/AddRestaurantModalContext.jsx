import { createContext, useState, useCallback, useMemo } from 'react';

export const AddRestaurantModalContext = createContext(null);

export function AddRestaurantModalProvider({ children }) {
  const [isVisibleAddRestaurantModal, setIsVisible] = useState(false);

  const showAddRestaurantModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const closeAddRestaurantModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const value = useMemo(
    () => ({
      isVisibleAddRestaurantModal,
      showAddRestaurantModal,
      closeAddRestaurantModal,
    }),
    [isVisibleAddRestaurantModal, showAddRestaurantModal, closeAddRestaurantModal],
  );

  return (
    <AddRestaurantModalContext.Provider value={value}>
      {children}
    </AddRestaurantModalContext.Provider>
  );
}
