import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";
import useRestaurants from "./hooks/useRestaurants";
import { useModalContext } from "./contexts/ModalContext";

import { useState } from "react";

function App() {
  const { activeModal, setActiveModal, setSelectedRestaurant } =
    useModalContext();
  const [category, setCategory] = useState("전체");
  const { restaurants, addRestaurant } = useRestaurants();

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  function renderModal() {
    switch (activeModal) {
      case "detail":
        return <RestaurantDetailModal />;
      case "add":
        return <AddRestaurantModal onAddRestaurant={addRestaurant} />;
      default:
        return null;
    }
  }

  return (
    <>
      <Header category={category} />
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
