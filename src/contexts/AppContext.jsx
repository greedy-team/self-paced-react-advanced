import { createContext } from "react";
import { useMemo, useState } from "react";
import getFilteredRestaurant from "../utils/getFilteredRestaurant";
import useRestaurants from "../hooks/useRestaurants";
import useModal from "../hooks/useModal";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [selectedCategory, setCategory] = useState("전체");
  const {
    isOpen: isModalOpen,
    modalType,
    open: openModal,
    close: closeModal,
  } = useModal();

  const { restaurants, onAddRestaurant } = useRestaurants();
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const filteredRestaurants = useMemo(() => {
    return getFilteredRestaurant(restaurants, selectedCategory);
  }, [restaurants, selectedCategory]);

  const value = {
    selectedCategory,
    setCategory,
    isModalOpen: isModalOpen,
    modalType,
    openModal: openModal,
    closeModal: closeModal,
    restaurants,
    onAddRestaurant,
    selectedRestaurant,
    setSelectedRestaurant,
    filteredRestaurants,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
