import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import CategoryFilter from "./components/Main/CategoryFilter";
import RestaurantList from "./components/Main/RestaurantList";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal";
import useCategoryStore from "./categoryStore";

function App() {
  // 상태값
  //const [category, setCategory] = useState("전체");
  const { category } = useCategoryStore();

  const [isDetailModal, setIsDetailModal] = useState(false);

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  const [isAddModal, setIsAddModal] = useState(false);

  const [totalRestaurants, setTotalRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setTotalRestaurants(data));
  }, []);
  // 파생값
  const filteredRestaurants =
    category === "전체"
      ? totalRestaurants
      : totalRestaurants.filter((r) => r.category === category);

  const selectedRestaurant = totalRestaurants.find(
    (r) => r.id === selectedRestaurantId,
  );

  //  핸들러
  const handleClickRestaurantList = (r) => {
    setIsDetailModal(true);
    setSelectedRestaurantId(r.id);
  };

  const handleClickAddRestaurant = (newRestaurant) => {
    setIsAddModal(false);
    setTotalRestaurants((prev) => [...prev, newRestaurant]);
  };
  return (
    <>
      <Header setIsAddModal={setIsAddModal} />
      <main>
        <CategoryFilter />
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          handleClickRestaurantList={handleClickRestaurantList}
        />
      </main>
      <aside>
        {isDetailModal && (
          <RestaurantDetailModal
            setIsDetailModal={setIsDetailModal}
            selectedRestaurant={selectedRestaurant}
          />
        )}
        {isAddModal && (
          <AddRestaurantModal
            handleClickAddRestaurant={handleClickAddRestaurant}
          />
        )}
      </aside>
    </>
  );
}

export default App;
