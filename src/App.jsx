
import './App.css'

function App() {
  return (
    <>
        Code It..
    </>
  )
}

export default App


/*

const RESTAURANT_URL = "http://localhost:3000/restaurants";

import { useState, useEffect } from "react";
import "./App.css";
import Gnb from "./components/headers/Gnb.jsx";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter.jsx";
import RestaurantList from "./components/mains/RestaurantList.jsx";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal.jsx";
import AddRestaurantModal from "./components/asides/AddRestaurantModal.jsx";
import categoryIcons from "./data/categoryIcons.js";
import categoryOptions from "./data/categoryOptions.js";
import ModalTypes from "./constants/modalTypes.js";

function App() {
  const [openModal, setOpenModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(RESTAURANT_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 에러가 발생했습니다.: ", error);
      });
  }, []);

  const handleAddRestaurant = async (restaurant) => {
    try {
      const response = await fetch(RESTAURANT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const created = await response.json();
      setRestaurants((prev) => [...prev, created]);
      setOpenModal(null);
    } catch (err) {
      console.error("POST 에러:", err);
    }
  };

  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <>
      <Gnb
        onAddInfoClick={() => {
          setOpenModal(ModalTypes.ADD);
        }}
      />
      <main>
        <RestaurantCategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          restaurants={restaurants}
        />
        <RestaurantList
          restaurants={filteredRestaurants}
          categoryIcons={categoryIcons}
          onRestaurantClick={(restaurant) => {
            setSelectedRestaurant(restaurant);
            setOpenModal(ModalTypes.INFO);
          }}
        />
      </main>
      <aside>
        <RestaurantInfoModal
          isOpen={openModal === ModalTypes.INFO}
          onClose={() => {
            setOpenModal(null);
            setSelectedRestaurant(null);
          }}
          restaurant={selectedRestaurant}
        />

        <AddRestaurantModal
          isOpen={openModal === ModalTypes.ADD}
          onClose={() => setOpenModal(null)}
          categoryOptions={categoryOptions}
          onAddRestaurant={handleAddRestaurant}
        />
      </aside>
    </>
  );
}

export default App;

*/