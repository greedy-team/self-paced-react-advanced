import styled from "styled-components";
import RestaurantListItem from "./RestaurantListItem.jsx";
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from "recoil";
import { modalState } from "../../recoil/ModalState.jsx";
import { filteredRestaurantsSelector } from "../../recoil/FilteredRestaurantsSelector.jsx";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const EmptyRestaurantList = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  text-align: center;
`;

const fetchRestaurants = async (setRestaurants) => {
  const response = await fetch("http://localhost:3000/restaurants");
  const data = await response.json();
  setRestaurants(data);
};

const RestaurantList = () => {
  const filteredRestaurants = useRecoilValue(filteredRestaurantsSelector);
  const [modalStateValue, setModalStateValue] = useRecoilState(modalState);
  const setRestaurants = useState(filteredRestaurants);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (modalStateValue === "add-success") {
      fetchRestaurants(setRestaurants).catch((error) => {
        showBoundary(error);
      });
      setModalStateValue(null);
    }
  }, [modalStateValue]);

  const restaurantsLoadable = useRecoilValueLoadable(filteredRestaurantsSelector);

  switch (restaurantsLoadable.state) {
    case "loading":
      return <div>로딩 중...</div>;
    case "hasError":
      throw restaurantsLoadable.contents;
    case "hasValue":
      const restaurants = restaurantsLoadable.contents;
      if (restaurants.length === 0) {
        return <EmptyRestaurantList>해당 카테고리에 해당하는 레스토랑이 없습니다.</EmptyRestaurantList>;
      }
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
  }
};

export default RestaurantList;
