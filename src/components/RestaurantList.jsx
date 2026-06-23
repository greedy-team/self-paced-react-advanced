import styled from "styled-components";
import RestaurantItem from "./RestaurantItem";
import useRestaurantStore from "../store/useRestaurantStore";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export default function RestaurantList() {
  const category = useRestaurantStore((state) => state.category);
  const restaurants = useRestaurantStore((state) => state.restaurants);
  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

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
