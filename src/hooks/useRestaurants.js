import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3000/restaurants";

function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []); //초기만 불러오도록 빈 배열

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (!response.ok) throw data;
      setRestaurants(data);
    } catch (error) {
      console.error("음식점 데이터를 불러오는 중 오류가 발생했습니다.", error);
      alert("음식점 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  const addRestaurant = async (restaurant) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      await fetchRestaurants();
    } catch (error) {
      console.error("음식점을 추가하는 중 오류가 발생했습니다.", error);
      alert("음식점 추가에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      throw error;
    }
  };

  return { restaurants, addRestaurant };
}

export default useRestaurants;
