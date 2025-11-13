import RestaurantListItem from "./RestaurantListItem";
import getCategoryIcon from "../../../utils/getCategoryIcon";
import styled from "styled-components";

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export default function RestaurantList({
  filteredRestaurants,
  openModal,
  setSelectedRestaurant,
}) {
  const handleSelect = (restaurant) => {
    openModal();
    setSelectedRestaurant(restaurant);
  };

  return (
    <ListContainer>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            icon={getCategoryIcon(restaurant.category)}
            onClick={() => handleSelect(restaurant)}
          />
        ))}
      </ul>
    </ListContainer>
  );
}
