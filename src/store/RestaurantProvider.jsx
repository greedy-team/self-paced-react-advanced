import { useEffect, useState } from "react";
import { RestaurantContext } from "./RestaurantContext";

export const RestaurantProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [category, setCategory] = useState('전체');

    useEffect(() => {
      const fetchRestaurants = async () => {
          try {
            const response = await fetch("http://localhost:3000/restaurants");
            const restaurantData = await response.json();
            setRestaurants(restaurantData);
          } catch (error) {
            console.error("레스토랑 목록 불러오기 실패: ", error);
          }
        };
    
        fetchRestaurants();
      }, []);
    
      const addRestaurant = async (newRestaurant) => {
        try {
          const response = await fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newRestaurant),
          });
          
          if (!response.ok) {
            throw new Error('레스토랑 추가 실패');
          }
    
          const addedRestaurant = await response.json();
          setRestaurants(prev => [...prev, addedRestaurant]);
          setIsAddModalOpen(false);
        } catch (error) {
          console.error('레스토랑 추가 실패:', error);
          throw error;
        }
      };
    
    
      const value = {
        restaurants,
        category,
        setCategory,
        addRestaurant,
      };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
};
