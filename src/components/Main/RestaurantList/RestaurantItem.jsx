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
import useModalStore from '../../../contexts/ModalStore';
import useRestaurantStore from '../../../contexts/RestaurantStore';

function RestaurantItem({ restaurant }) {
  const setSelectedRestaurant = useRestaurantStore((state) => state.setSelectedRestaurant);
  const openRestaurantDetailModal = useModalStore((state) => state.openRestaurantDetailModal);

  const handleClick = () => {
    openRestaurantDetailModal();
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
