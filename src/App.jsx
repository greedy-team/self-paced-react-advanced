import { Suspense, useEffect } from "react";
import "./App.css";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import Body from "./pages/Body";
import Header from "./pages/Header";
import { useDispatch } from "react-redux";
import { fetchLists } from "./store/actions/restaurantAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Body />
      <Suspense fallback={<div>Loading RestaurantInfoModal...</div>}>
        <RestaurantInfoModal />
      </Suspense>
      <AddRestaurantModal />
    </>
  );
}

export default App;
