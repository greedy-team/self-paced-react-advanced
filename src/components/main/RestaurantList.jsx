import styled from "styled-components";
import RestaurantListItem from "./RestaurantListItem.jsx";
import { useRecoilValue, useRecoilState } from "recoil";
import { modalState } from "../../recoil/ModalState.jsx";
import { filteredRestaurantSelector } from "../../recoil/FilteredRestaurantSelector";
import { useEffect, useState } from "react";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const fetchRestaurants = async (setRestaurants) => {
  try {
    const response = await fetch("http://localhost:3000/restaurants");
    if (!response.ok) {
      throw new Error("서버 응답 오류");
    }
    const data = await response.json();
    setRestaurants(data); 
  } catch (error) {
    console.error("레스토랑 데이터를 가져오는 데 실패했습니다:", error);
  }
};

const RestaurantList = () => {
  const filteredRestaurants = useRecoilValue(filteredRestaurantSelector);
  const [modalStateValue, setModalStateValue] = useRecoilState(modalState);
  const [restaurants, setRestaurants] = useState(filteredRestaurants);

  useEffect(() => {
    if (modalStateValue === "add-success") {
      fetchRestaurants(setRestaurants); 
      setModalStateValue(null); 
    }
  }, [modalStateValue]);

  return (
    <RestaurantListContainer>
      <ul>
        {restaurants.map((restaurant) => (
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
