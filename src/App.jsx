import "./App.css";
import { useSetRecoilState } from "recoil";
import { restaurantState } from "./atoms/restaurantState";
import Gnb from "./components/headers/Gnb";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter";
import RestaurantList from "./components/mains/RestaurantList";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal";
import AddRestaurantModal from "./components/asides/AddRestaurantModal";
import categoryOptions from "./data/categoryOptions";
import { useEffect } from "react";
import { fetchRestaurants } from "./api/restaurantsApi";

function App() {
  const setRestaurants = useSetRecoilState(restaurantState);

  useEffect(() => {
    fetchRestaurants().then((data) => setRestaurants(data));
  }, [setRestaurants]);

  return (
    <>
      <Gnb />
      <main>
        <RestaurantCategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        <RestaurantInfoModal />
        <AddRestaurantModal categoryOptions={categoryOptions} />
      </aside>
    </>
  );
}

export default App;
