import { useState } from "react";
import { SelectedRestaurantContext } from "./RestaurantContext";

export const SelectedRestaurantProvider = ({ children }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    
    const value = {
        selectedRestaurant,
        setSelectedRestaurant,
    };

  return (
    <SelectedRestaurantContext.Provider value={value}>
      {children}
    </SelectedRestaurantContext.Provider>
  );
};
