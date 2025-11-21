import { createContext, useState, useMemo } from 'react';

const RestaurantContext = createContext({
  selectedRestaurant: null,
  setSelectedRestaurant: () => {},
});

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

export default RestaurantContext;
