import styled from "styled-components";
import RestaurantItem from "./RestaurantItem";
import { useRestaurantContext } from "../contexts/RestaurantContext";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export default function RestaurantList() {
  const { filteredRestaurants } = useRestaurantContext();
  return (
    <Container>
      <ul className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </Container>
  );
}
