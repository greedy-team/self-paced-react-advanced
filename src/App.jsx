import "./App.css";
import { useDispatch } from "react-redux";
import Gnb from "./components/headers/Gnb";
import RestaurantCategoryFilter from "./components/mains/RestaurantCategoryFilter";
import RestaurantList from "./components/mains/RestaurantList";
import RestaurantInfoModal from "./components/asides/RestaurantInfoModal";
import AddRestaurantModal from "./components/asides/AddRestaurantModal";
import categoryOptions from "./data/categoryOptions";
import { useEffect } from "react";
import { fetchAllRestaurants } from "./redux/slice/restaurantSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRestaurants());
  }, [dispatch]);

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
