import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";

import { useState, useEffect } from "react";
const BASE_URL = "http://localhost:3000/restaurants";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [category, setCategory] = useState("전체");
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []); //초기만 불러오도록 빈 배열

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("음식점 목록을 불러오는 데 실패했습니다.");
      }
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("음식점 데이터를 불러오는 중 오류가 발생했습니다.", error);
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
      if (!response.ok) {
        throw new Error(
          "음식점 추가에 실패했습니다. 잠시 후 다시 시도해 주세요.",
        );
      }
      await fetchRestaurants();
    } catch (error) {
      console.error("음식점을 추가하는 중 오류가 발생했습니다.", error);
      throw error;
    }
  };

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header category={category} onAddClick={() => setIsAddModalOpen(true)} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={(restaurant) => {
            setSelectedRestaurant(restaurant);
            setIsDetailModalOpen(true);
          }}
        />
      </main>
      <aside>
        {isDetailModalOpen ? (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={() => setIsDetailModalOpen(false)}
          />
        ) : null}
        {isAddModalOpen ? (
          <AddRestaurantModal
            onAddRestaurant={addRestaurant}
            onClose={() => setIsAddModalOpen(false)}
          />
        ) : null}
      </aside>
    </>
  );
}

export default App;
