import "./App.css";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/Main/CategoryFilter";
import RestaurantList from "./components/Main/RestaurantList";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurants, addRestaurant } from "./store/RestaurantSlice";

function App() {
  const modalTypeToOpen = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();

  const fetchRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants");
      if (!response.ok)
        throw new Error("레스토랑 목록을 불러오는데 문제가 발생했습니다.");
      const data = await response.json();
      dispatch(setRestaurants(data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const addNewRestaurant = async (restaurant) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
      });
      if (!response.ok) {
        throw new Error("레스토랑 추가에 문제가 발생했습니다.");
      }
      const newRestaurant = await response.json();
      return newRestaurant;
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdatedRestaurants = async (restaurant) => {
    const newRestaurant = await addNewRestaurant(restaurant);
    dispatch(addRestaurant(newRestaurant));
  };

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
