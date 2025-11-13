import { useState, useEffect, useCallback } from "react";
import { getRestaurants, postRestaurant } from "../api/restaurants";

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = useCallback(async () => {
    const data = await getRestaurants();
    setRestaurants(data);
  }, []);

  const addRestaurant = async (restaurant) => {
    const newRestaurant = {
      ...restaurant,
      id: Date.now(),
    };

    await postRestaurant(newRestaurant);
  };

  const onAddRestaurant = async (restaurants) => {
    await addRestaurant(restaurants);
    await fetchRestaurants();
  };

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return { restaurants, onAddRestaurant };
}
