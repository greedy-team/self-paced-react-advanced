import styled from "styled-components";
import RestaurantListItem from "./RestaurantListItem.jsx";
import { useRecoilValue, useRecoilState } from "recoil";
import { modalState } from "../../recoil/ModalState.jsx";
import { filteredRestaurantSelector } from "../../recoil/FilteredRestaurantSelector";
import { useEffect } from "react";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantList = () => {
  const restaurants = useRecoilValue(filteredRestaurantSelector);
  const [modalStateValue, setModalStateValue] = useRecoilState(modalState);

  useEffect(() => {
    if (modalStateValue === "add-success") {
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
