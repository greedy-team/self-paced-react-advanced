import "./App.css";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext.jsx";
import Header from "./components/Header/Header";
import RestaurantCategoryFilter from "./components/restaurant/RestaurantCategoryFilter/RestaurantCategoryFilter";
import RestaurantList from "./components/restaurant/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/modal/AddRestaurantModal";

function App() {
  const { isModalOpen, modalType } = useContext(AppContext);

  return (
    <>
      <Header />
      <main>
        <RestaurantCategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {isModalOpen && modalType === "DETAIL_RESTAURANT" && (
          <RestaurantDetailModal />
        )}
        {isModalOpen && modalType === "ADD_RESTAURANT" && (
          <AddRestaurantModal />
        )}
      </aside>
    </>
  );
}

export default App;
