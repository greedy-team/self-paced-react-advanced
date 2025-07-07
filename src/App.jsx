import "./App.css";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/Main/CategoryFilter";
import RestaurantList from "./components/Main/RestaurantList";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewRestaurant, fetchRestaurants } from "./store/RestaurantSlice";

function App() {
  const modalTypeToOpen = useSelector((state) => state.modal.type);
  const { status, error } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRestaurants());
    }
  }, [status, dispatch]);

  const handleUpdatedRestaurants = (restaurant) => {
    dispatch(addNewRestaurant(restaurant));
  };

  if (status === "loading") return <p>Loading…</p>;
  if (status === "failed") return <p>{error}</p>;

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {modalTypeToOpen === "add" && (
          <AddRestaurantModal onSubmitRestaurant={handleUpdatedRestaurants} />
        )}
        {modalTypeToOpen === "detail" && <RestaurantDetailModal />}
      </aside>
    </>
  );
}

export default App;
