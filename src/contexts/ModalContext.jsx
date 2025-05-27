import { createContext, useMemo, useState } from 'react';

export const RestaurantDetailModalValueContext = createContext();
export const RestaurantDetailModalActionContext = createContext();
export const RestaurantAddModalValueContext = createContext();
export const RestaurantAddModalActionContext = createContext();
export const SelectedRestaurantValueContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen] =
    useState(false);
  const [isRestaurantAddModalOpen, setIsRestaurantAddModalOpen] =
    useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const restaurantDetailModalActions = useMemo(
    () => ({
      openRestaurantDetailModal(restaurant) {
        setSelectedRestaurant(restaurant);
        setIsRestaurantDetailModalOpen(true);
      },
      closeRestaurantDetailModal() {
        setIsRestaurantDetailModalOpen(false);
        setSelectedRestaurant(null);
      },
    }),
    []
  );

  const restaurantAddModalActions = useMemo(
    () => ({
      openRestaurantAddModal() {
        setIsRestaurantAddModalOpen(true);
      },
      closeRestaurantAddModal() {
        setIsRestaurantAddModalOpen(false);
      },
    }),
    []
  );

  return (
    <RestaurantDetailModalActionContext.Provider
      value={restaurantDetailModalActions}
    >
      <RestaurantAddModalActionContext.Provider
        value={restaurantAddModalActions}
      >
        <RestaurantDetailModalValueContext.Provider
          value={isRestaurantDetailModalOpen}
        >
          <RestaurantAddModalValueContext.Provider
            value={isRestaurantAddModalOpen}
          >
            <SelectedRestaurantValueContext.Provider value={selectedRestaurant}>
              {children}
            </SelectedRestaurantValueContext.Provider>
          </RestaurantAddModalValueContext.Provider>
        </RestaurantDetailModalValueContext.Provider>
      </RestaurantAddModalActionContext.Provider>
    </RestaurantDetailModalActionContext.Provider>
  );
};
