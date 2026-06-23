import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import ModalRenderer from "./components/ModalRenderer";
import useRestaurantStore from "./store/useRestaurantStore";

function App() {
  const fetchRestaurants = useRestaurantStore(
    (state) => state.fetchRestaurants,
  );

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
