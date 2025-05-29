import { useState, useEffect, useCallback } from "react";
import RestaurantContext from "./RestaurantContext";
import { fetchRestaurants, createRestaurant } from "../api/restaurantsApi";
import { restaurantState } from "../atoms/restaurantState";
import { useSetRecoilState } from "recoil";

function RestaurantProvider({ children }) {
  const [openModal, setOpenModal] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const setRestaurants = useSetRecoilState(restaurantState);

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
        selectedRestaurant,
        setSelectedRestaurant,

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
