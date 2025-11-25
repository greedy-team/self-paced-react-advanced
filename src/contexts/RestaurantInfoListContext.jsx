import { createContext, useMemo } from 'react';
import useRestaurantInfoList from '../hooks/useRestaurantInfoList';

export const RestaurantInfoListContext = createContext();

export function RestaurantInfoListProvider({ children }) {
  const { restaurantInfoList, addRestaurantInfo } = useRestaurantInfoList();

  const value = useMemo(
    () => ({
      restaurantInfoList,
      addRestaurantInfo,
    }),
    [restaurantInfoList, addRestaurantInfo],
  );

  return (
    <RestaurantInfoListContext.Provider value={value}>
      {children}
    </RestaurantInfoListContext.Provider>
  );
}
