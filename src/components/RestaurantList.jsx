import styled from "styled-components";
import RestaurantItem from "./RestaurantItem";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export default function RestaurantList({ restaurants }) {
  return (
    <Container>
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </Container>
  );
}
