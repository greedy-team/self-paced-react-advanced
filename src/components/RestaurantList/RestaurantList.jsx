import PropTypes from "prop-types";
import styled from "styled-components";
import RestaurantItem from "./RestaurantItem";
import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

export default function RestaurantList({ restaurants, onOpenModal }) {
  const { category } = useContext(CategoryContext);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (category === "전체") {
      return true;
    }
    const SameCategory = restaurant.category === category;
    return SameCategory;
  });

  return (
    <RestaurantListContainer>
      <ul>
        {filteredRestaurants.map((item) => (
          <RestaurantItem key={item.id} item={item} onOpenModal={onOpenModal} />
        ))}
      </ul>
    </RestaurantListContainer>
  );
}

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
