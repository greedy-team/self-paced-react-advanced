import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import RestaurantCategoryFilter from "./components/restaurant/RestaurantCategoryFilter/RestaurantCategoryFilter";
import RestaurantList from "./components/restaurant/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/modal/AddRestaurantModal";
import useModal from "./hooks/useModal";
import { useRestaurants } from "./hooks/useRestaurants.js";

function App() {
  const {
    isOpen: isModalOpen,
    modalType,
    open: openModal,
    close: closeModal,
  } = useModal();
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const fetchRestaurants = useRestaurants((state) => state.fetchRestaurants);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <>
      <Header openModal={openModal} />
      <main>
        <RestaurantCategoryFilter />
        <RestaurantList
          openModal={openModal}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      </main>
      <aside>
        {isModalOpen && modalType === "DETAIL_RESTAURANT" && (
          <RestaurantDetailModal
            closeModal={closeModal}
            selectedRestaurant={selectedRestaurant}
          />
        )}
        {isModalOpen && modalType === "ADD_RESTAURANT" && (
          <AddRestaurantModal closeModal={closeModal} />
        )}
      </aside>
    </>
  );
}

export default App;
