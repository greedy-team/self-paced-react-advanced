import { createContext, useState, useCallback, useMemo, useContext } from 'react';
import { RestaurantInfoListContext } from './RestaurantInfoListContext';

export const RestaurantDetailModalContext = createContext(null);

export function RestaurantDetailModalProvider({ children }) {
  const [clickedRestaurantID, setClickedRestaurantID] = useState(null);
  const { restaurantInfoList } = useContext(RestaurantInfoListContext);

  const updateClickedRestaurantID = useCallback((restaurantID) => {
    setClickedRestaurantID(restaurantID);
  }, []);

  const restaurantInfo = useMemo(
    () => (
      restaurantInfoList.find((restaurant) => restaurant.id === clickedRestaurantID)
    ),
    [clickedRestaurantID, restaurantInfoList],
  );
  const isVisibleRestaurantDetailModal = restaurantInfo !== undefined;

  const value = useMemo(
    () => ({
      restaurantInfo,
      isVisibleRestaurantDetailModal,
      updateClickedRestaurantID,
    }),
    [restaurantInfo, isVisibleRestaurantDetailModal, updateClickedRestaurantID],
  );

  return (
    <RestaurantDetailModalContext.Provider value={value}>
      {children}
    </RestaurantDetailModalContext.Provider>
  );
}
