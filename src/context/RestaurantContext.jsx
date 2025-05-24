import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const [restaurantItem, setRestaurantItem] = useState({
    name: "",
    description: "",
  });

  return (
    <RestaurantContext.Provider
      value={{
        restaurantItem,
        setRestaurantItem,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export const useRestaurantContext = () => useContext(RestaurantContext);
