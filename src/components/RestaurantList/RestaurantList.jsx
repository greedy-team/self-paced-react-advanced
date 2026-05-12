import styled from "styled-components";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ restaurants, onOpenModal }) {
  return (
    <RestaurantListContainer>
      <RestaurantListUl>
        {restaurants.map((item) => (
          <RestaurantItem key={item.id} item={item} onOpenModal={onOpenModal} />
        ))}
      </RestaurantListUl>
    </RestaurantListContainer>
  );
}

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantListUl = styled.ul``;
