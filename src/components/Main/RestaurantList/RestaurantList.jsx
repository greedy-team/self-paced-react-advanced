import RestaurantItem from './RestaurantItem';
import {
  RestaurantListContainer,
  RestaurantItemList,
} from './RestaurantList.styles';

function RestaurantList({ restaurants, onRestaurantClick }) {
  return (
    <RestaurantListContainer>
      <RestaurantItemList>
        {restaurants.map(restaurant => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onRestaurantClick={onRestaurantClick}
          />
        ))}
      </RestaurantItemList>
    </RestaurantListContainer>
  );
}

export default RestaurantList;
