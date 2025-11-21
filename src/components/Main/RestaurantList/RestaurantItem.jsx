import { useContext } from 'react';
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
import ModalContext from '../../../contexts/ModalContext';
import RestaurantContext from '../../../contexts/RestaurantContext';

function RestaurantItem({ restaurant }) {
  const { setIsRestaurantDetailModalOpen } = useContext(ModalContext);
  const { setSelectedRestaurant } = useContext(RestaurantContext);

  const handleClick = () => {
    setIsRestaurantDetailModalOpen(true);
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
