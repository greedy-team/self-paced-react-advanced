import RestaurantItem from './RestaurantItem';
import {
  RestaurantListContainer,
  RestaurantItemList,
} from './RestaurantList.styles';

function RestaurantList({ restaurants }) {
  return (
    <RestaurantListContainer>
      <RestaurantItemList>
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantItemList>
    </RestaurantListContainer>
  );
}

export default RestaurantList;
