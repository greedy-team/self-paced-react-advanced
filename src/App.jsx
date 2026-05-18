import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import useRestaurants from "./hooks/useRestaurants";

import { useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState(null); //add, detail, null
  const [category, setCategory] = useState("전체");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { restaurants, addRestaurant } = useRestaurants();

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  function renderModal() {
    switch (activeModal) {
      case "detail":
        return (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onCloseDetailModal={() => setActiveModal(null)}
          />
        );
      case "add":
        return (
          <AddRestaurantModal
            onAddRestaurant={addRestaurant}
            onCloseAddModal={() => setActiveModal(null)}
          />
        );
      default:
        return null;
    }
  }

  return (
    <>
      <Header
        category={category}
        onOpenAddModal={() => setActiveModal("add")}
      />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={(restaurant) => {
            setSelectedRestaurant(restaurant);
            setActiveModal("detail");
          }}
        />
      </main>
      <aside>{renderModal()}</aside>
    </>
  );
}

export default App;
