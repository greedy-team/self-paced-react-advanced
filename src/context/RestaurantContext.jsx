import { createContext, useContext, useState, useEffect } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
    const [restaurants, setRestaurants] = useState([]);
    const [restaurantItem, setRestaurantItem] = useState({
        name: "",
        description: ""
    });
    const [modalState, setModalState] = useState('list');   // detail, add, list 3가지로 관리
    const [selectedCategory, setSelectedCategory] = useState("all");

    const getRestaurants = async () => {
        try {
            const response = await fetch("http://localhost:3000/restaurants");
            const data = await response.json();
            setRestaurants(data);
        } catch (err) {
            console.error("레스토랑 데이터를 불러오는 데 실패했습니다:", err);
        }
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    return (
        <RestaurantContext.Provider value={{
            modalState, setModalState,
            restaurants, setRestaurants,
            restaurantItem, setRestaurantItem,
            selectedCategory, setSelectedCategory,
            getRestaurants
        }}>
            {children}
        </RestaurantContext.Provider>
    );
}

export const useRestaurantContext = () => useContext(RestaurantContext);