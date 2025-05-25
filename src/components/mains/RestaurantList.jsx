import { useContext } from "react";
import { ListContainer, RestaurantListWrapper } from "./RestaurantList.styled";
import RestaurantCard from "./RestaurantCard";
import RestaurantContext from "../../contexts/RestaurantContext";
import ModalTypes from "../../constants/modalTypes";

function RestaurantList() {
  const { restaurants, selectedCategory, setSelectedRestaurant, setOpenModal } =
    useContext(RestaurantContext);

  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === selectedCategory);

  const handleClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setOpenModal(ModalTypes.INFO);
  };

  return (
    <ListContainer>
      <RestaurantListWrapper>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={handleClick}
          />
        ))}
      </RestaurantListWrapper>
    </ListContainer>
  );
}

export default RestaurantList;
