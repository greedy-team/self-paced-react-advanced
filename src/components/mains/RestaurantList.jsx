import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import MODAL_TYPES from "../../constants/modalTypes";
import { ListContainer, RestaurantListWrapper } from "./RestaurantList.styled";
import { setSelectedRestaurant } from "../../redux/slice/restaurantSlice";
import { setModalType } from "../../redux/slice/modalSlice";

function RestaurantList() {
  const allRestaurants = useSelector(
    (state) => state.restaurants.allRestaurants
  );
  const selectedCategory = useSelector(
    (state) => state.restaurants.selectedCategory
  );
  const dispatch = useDispatch();

  const filteredRestaurants = React.useMemo(() => {
    return selectedCategory === "전체"
      ? allRestaurants
      : allRestaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  }, [allRestaurants, selectedCategory]);

  const handleClick = (restaurant) => {
    dispatch(setSelectedRestaurant(restaurant));
    dispatch(setModalType(MODAL_TYPES.INFO));
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
