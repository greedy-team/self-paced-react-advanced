import { useState } from "react";
import { RestaurantContext } from "./RestaurantContext";
import useRestaurants from "../hooks/useRestaurants";

export default function RestaurantProvider({ children }) {
  const [category, setCategory] = useState("전체");
  const { restaurants, addRestaurant } = useRestaurants();

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

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
