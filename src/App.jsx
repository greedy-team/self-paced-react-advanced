import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import ModalRenderer from "./components/ModalRenderer";
import { useFetchRestaurants } from "./store/useRestaurantStore";

function App() {
  const fetchRestaurants = useFetchRestaurants();

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        <ModalRenderer />
      </aside>
    </>
  );
}

export default App;
