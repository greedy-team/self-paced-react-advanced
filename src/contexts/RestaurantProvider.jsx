import { useState, useEffect } from "react";
import RestaurantContext from "./RestaurantContext";

const RESTAURANT_URL = "http://localhost:3000/restaurants";

function RestaurantProvider({ children }) {
  const [openModal, setOpenModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const handleGetRestaurant = async () => {
    try {
      const response = await fetch(RESTAURANT_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("GET 실패:", error);
    }
  };

  useEffect(() => {
    handleGetRestaurant();
  }, []);

  const handleAddRestaurant = async (restaurant) => {
    try {
      const response = await fetch(RESTAURANT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
      });
      const created = await response.json();
      setRestaurants((prev) => [...prev, created]);
      setOpenModal(null);
    } catch (error) {
      console.error("POST 실패:", error);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        openModal,
        setOpenModal,
        selectedCategory,
        setSelectedCategory,
        selectedRestaurant,
        setSelectedRestaurant,
        restaurants,
        setRestaurants,
        handleAddRestaurant,
        handleGetRestaurant
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantProvider;
