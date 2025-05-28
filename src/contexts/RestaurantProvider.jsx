import { useState, useEffect, useCallback } from "react";
import RestaurantContext from "./RestaurantContext";
import { fetchRestaurants, createRestaurant } from "../api/restaurantsApi";

function RestaurantProvider({ children }) {
  const [openModal, setOpenModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = useCallback(async () => {
    try {
      const data = await fetchRestaurants();
      setRestaurants(data);
    } catch (err) {
      console.error("GET 실패:", err);
    }
  }, []);

  const addRestaurant = useCallback(async (newItem) => {
    try {
      const created = await createRestaurant(newItem);
      setRestaurants((prev) => [...prev, created]);
    } catch (err) {
      console.error("POST 실패:", err);
    }
  }, []);

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  return (
    <RestaurantContext.Provider
      value={{
        // ui
        openModal,
        setOpenModal,
        selectedCategory,
        setSelectedCategory,
        selectedRestaurant,
        setSelectedRestaurant,

        //data
        restaurants,

        // api
        getRestaurants,
        addRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantProvider;
