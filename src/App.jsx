import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal/AddRestaurantModal";

const BASE_URL = "http://localhost:3000/restaurants";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const [category, setCategory] = useState("전체");

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (category === "전체") {
      return true;
    }
    const SameCategory = restaurant.category === category;
    return SameCategory;
  });

  const handleAddRestaurant = async (newRestaurant) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRestaurant),
    });

    const data = await res.json();

    setRestaurants((prev) => [...prev, data]);

    setIsAddModalOpen(false);
  };

  const handleOpenModal = (item) => {
    setSelectedRestaurant(item);
    setIsDetailModalOpen(true);
  };

  return (
    <>
      <Header setIsAddModalOpen={() => setIsAddModalOpen(true)} />
      <main>
        <CategoryFilter category={category} setCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          category={category}
          onOpenModal={handleOpenModal}
        />
      </main>
      <aside>
        {isDetailModalOpen && (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={() => setIsDetailModalOpen(false)}
          />
        )}
        {isAddModalOpen && (
          <AddRestaurantModal
            onClose={() => setIsAddModalOpen(false)}
            onAdd={handleAddRestaurant}
          />
        )}
      </aside>
    </>
  );
}

export default App;
