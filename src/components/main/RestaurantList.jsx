import styled from "styled-components";
import RestaurantListItem from "./RestaurantListItem.jsx";
import { useRecoilValue, useRecoilState } from "recoil";
import { modalState } from "../../recoil/ModalState.jsx";
import { categoryState } from "../../recoil/CategoryState.jsx";
import { useEffect, useState } from "react";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantList = () => {
  const [modalStateValue, setModalStateValue] = useRecoilState(modalState);
  const selectedCategory = useRecoilValue(categoryState);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();
      const filtered =
        selectedCategory === "all"
          ? data
          : data.filter(
              (restaurant) => restaurant.category === selectedCategory
            );

      setFilteredRestaurants(filtered);
    } catch (err) {
      console.error("레스토랑 데이터를 불러오는 데 실패했습니다:", err);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, [selectedCategory]);

  useEffect(() => {
    if (modalStateValue === "add-success") {
      getRestaurants();
      setModalStateValue(null);
    }
  }, [modalStateValue]);

  return (
    <RestaurantListContainer>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            categoryIcon={restaurant.icon}
            categoryAlt={restaurant.alt}
            name={restaurant.name}
            description={restaurant.description}
            setModalStateValue={setModalStateValue}
          />
        ))}
      </ul>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
