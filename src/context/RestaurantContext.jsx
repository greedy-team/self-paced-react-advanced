import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantItem, setRestaurantItem] = useState({
    name: "",
    description: "",
  });

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        restaurantItem,
        setRestaurantItem,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export const useRestaurantContext = () => useContext(RestaurantContext);
