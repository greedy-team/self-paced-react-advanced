import { useState, useMemo } from "react";
import { RestaurantContext } from "./RestaurantContext";
import useRestaurants from "../hooks/useRestaurants";

export default function RestaurantProvider({ children }) {
  const [category, setCategory] = useState("전체");
  const { restaurants, addRestaurant } = useRestaurants();

  // console.log("RestaurantProvider 렌더링", { category, restaurants });
  const filteredRestaurants = useMemo(() => {
    // console.log("filteredRestaurants 계산", { category, restaurants });
    return category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);
  }, [category, restaurants]);

  const value = {
    category,
    setCategory,
    restaurants,
    addRestaurant,
    filteredRestaurants,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
}
