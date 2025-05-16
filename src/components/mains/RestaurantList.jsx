import { ListContainer, RestaurantListWrapper } from "./RestaurantList.styled";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants, categoryIcons, onRestaurantClick }) {
  return (
    <ListContainer>
      <RestaurantListWrapper>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            categoryIcons={categoryIcons}
            onClick={onRestaurantClick}
          />
        ))}
      </RestaurantListWrapper>
    </ListContainer>
  );
}

export default RestaurantList;
