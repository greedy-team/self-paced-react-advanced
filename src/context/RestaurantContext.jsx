import { createContext, useContext, useState, useEffect } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantItem, setRestaurantItem] = useState({
    name: "",
    description: "",
  });

  const getRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    } catch (err) {
      console.error("레스토랑 데이터를 불러오는 데 실패했습니다:", err);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        restaurantItem,
        setRestaurantItem,
        getRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export const useRestaurantContext = () => useContext(RestaurantContext);
