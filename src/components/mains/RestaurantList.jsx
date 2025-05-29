import { ListContainer, RestaurantListWrapper } from "./RestaurantList.styled";
import RestaurantCard from "./RestaurantCard";
import ModalTypes from "../../constants/modalTypes";
import { useRecoilValue } from "recoil";
import { filteredRestaurantState } from "../../atoms/restaurantState";

function RestaurantList() {
  const filteredRestaurants = useRecoilValue(filteredRestaurantState);

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
