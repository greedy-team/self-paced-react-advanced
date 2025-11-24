import { CATEGORY_IMAGE } from '../../../data/restaurantCategories';
import {
  RestaurantListItem,
  RestaurantButton,
  RestaurantCategory,
  CategoryIcon,
  RestaurantInfo,
  RestaurantName,
  RestaurantDescription,
} from './RestaurantItem.styles';
import { useModalDispatch, RESTAURANT_MODAL_ACTION_TYPES } from '../../../contexts/ModalContext';
import { useRestaurantContext } from '../../../contexts/RestaurantContext';

function RestaurantItem({ restaurant }) {
  const dispatch = useModalDispatch();
  const { setSelectedRestaurant } = useRestaurantContext();

  const handleClick = () => {
    dispatch({ type: RESTAURANT_MODAL_ACTION_TYPES.OPEN_RESTAURANT_DETAIL });
    setSelectedRestaurant(restaurant);
  };

  return (
    <RestaurantListItem>
      <RestaurantButton type="button" onClick={handleClick}>
        <RestaurantCategory>
          <CategoryIcon
            src={CATEGORY_IMAGE[restaurant.category]}
            alt={restaurant.category}
          />
        </RestaurantCategory>
        <RestaurantInfo>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantDescription>
            {restaurant.description}
          </RestaurantDescription>
        </RestaurantInfo>
      </RestaurantButton>
    </RestaurantListItem>
  );
}

export default RestaurantItem;
