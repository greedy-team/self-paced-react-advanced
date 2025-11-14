import React from 'react';
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

function RestaurantItem({ restaurant, onRestaurantClick }) {
  return (
    <RestaurantListItem>
      <RestaurantButton type="button" onClick={() => onRestaurantClick(restaurant)}>
        <RestaurantCategory>
          <CategoryIcon
            src={CATEGORY_IMAGE[restaurant.category]}
            alt={restaurant.category}
          />
        </RestaurantCategory>
        <RestaurantInfo>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        </RestaurantInfo>
      </RestaurantButton>
    </RestaurantListItem>
  );
}

export default RestaurantItem;
