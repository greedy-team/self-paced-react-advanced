import {
  createContext, useState, useMemo, useContext,
} from 'react';

const RestaurantContext = createContext(null);

export function RestaurantProvider({ children }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const value = useMemo(
    () => ({
      selectedRestaurant,
      setSelectedRestaurant,
    }),
    [selectedRestaurant,
      setSelectedRestaurant],
  );

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
}

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (context === null) {
    throw new Error('useRestaurantContext는 RestaurantProvider 내에서 사용되어야 합니다.');
  }
  return context;
};

export default RestaurantContext;
