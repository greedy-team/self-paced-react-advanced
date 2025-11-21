import { createContext, useCallback, useEffect, useState } from "react";
import useModal from "../hooks/useModal";

const API_URL = "http://localhost:3000/restaurants";

const RestaurantContext = createContext({
  restaurantList: [],
  category: "전체",
  filteredRestaurants: [],
  selected: null,
  isAddModalOpen: false,
  setCategory: () => {},
  openAddModal: () => {},
  closeAddModal: () => {},
  selectRestaurant: () => {},
  deselectRestaurant: () => {},
  addRestaurant: async () => {},
});

export const RestaurantProvider = ({ children }) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [category, setCategory] = useState("전체");
  const [selected, setSelected] = useState(null);

  const {
    isOpen: isAddModalOpen,
    open: openAddModal,
    close: closeAddModal,
  } = useModal(false);

  const fetchRestaurants = useCallback(async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRestaurantList(data);
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  const filteredRestaurants =
    category === "전체"
      ? restaurantList
      : restaurantList.filter((restaurant) => restaurant.category === category);

  const selectRestaurant = (restaurant) => setSelected(restaurant);
  const deselectRestaurant = () => setSelected(null);

  const addRestaurant = async ({ name, description, category }) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, category }),
    });

    closeAddModal();
    await fetchRestaurants();
  };

  const value = {
    restaurantList,
    category,
    filteredRestaurants,
    selected,
    isAddModalOpen,
    setCategory,
    openAddModal,
    closeAddModal,
    selectRestaurant,
    deselectRestaurant,
    addRestaurant,
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
