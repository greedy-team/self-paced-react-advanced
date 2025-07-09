import { Suspense, useEffect } from "react";
import "./App.css";
import AddRestaurantModal from "./component/aside/AddRestaurantModal";
import RestaurantInfoModal from "./component/aside/RestaurantInfoModal";
import Body from "./pages/Body";
import Header from "./pages/Header";
import useFetchRestaurants from "./hooks/useFetchRestaurants";

function App() {
  // 레스토랑 리스트 불러오기(커스텀 훅)
  useFetchRestaurants();

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
