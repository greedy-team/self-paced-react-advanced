import { useRecoilValue, useSetRecoilState } from "recoil";
import RestaurantCard from "./RestaurantCard";
import ModalTypes from "../../constants/modalTypes";
import {
  openModalState,
  filteredRestaurantState,
  selectedRestaurantState,
} from "../../atoms/restaurantState";
import { ListContainer, RestaurantListWrapper } from "./RestaurantList.styled";

function RestaurantList() {
  const filteredRestaurants = useRecoilValue(filteredRestaurantState);
  const selectedRestaurant = useSetRecoilState(selectedRestaurantState);
  const setOpenModal = useSetRecoilState(openModalState);

  const handleClick = (restaurant) => {
    selectedRestaurant(restaurant);
    setOpenModal(ModalTypes.INFO);
  };

  return (
    <ListContainer>
      <RestaurantListWrapper>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleClick(restaurant)}
          />
        ))}
      </RestaurantListWrapper>
    </ListContainer>
  );
}

export default RestaurantList;
