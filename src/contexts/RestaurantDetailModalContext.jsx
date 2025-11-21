import { createContext, useState, useCallback, useMemo } from 'react';

export const RestaurantDetailModalContext = createContext(null);

export function RestaurantDetailModalProvider({ children, restaurantInfoList }) {
  const [clickedRestaurantID, setClickedRestaurantID] = useState(null);

  const updateClickedRestaurantID = useCallback((restaurantID) => {
    setClickedRestaurantID(restaurantID);
  }, []);

  const restaurantInfo = restaurantInfoList.find(
    (restaurant) => restaurant.id === clickedRestaurantID,
  );
  const isVisible = restaurantInfo !== undefined;

  const value = useMemo(
    () => ({
      restaurantInfo,
      isVisible,
      updateClickedRestaurantID,
    }),
    [restaurantInfo, isVisible, updateClickedRestaurantID],
  );

  return (
    <RestaurantDetailModalContext.Provider value={value}>
      {children}
    </RestaurantDetailModalContext.Provider>
  );
}
