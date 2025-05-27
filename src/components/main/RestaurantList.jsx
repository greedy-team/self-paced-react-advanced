import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';
import { useContext, useMemo, useEffect } from 'react';
import {
  SetRestaurantsContext,
  RestaurantsContext,
  SelectedCategoryContext,
} from '../../contexts/RestaurantContext';
import { RestaurantDetailModalActionContext } from '../../contexts/ModalContext';
import { getRestaurants } from '../../api/api';

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantListItemContainer = styled.ul`
  list-style: none;
`;

const RestaurantList = () => {
  const restaurants = useContext(RestaurantsContext);
  const setRestaurants = useContext(SetRestaurantsContext);
  const { selectedCategory } = useContext(SelectedCategoryContext);
  const { openRestaurantDetailModal } = useContext(
    RestaurantDetailModalActionContext
  );

  useEffect(() => {
    const updateRestaurants = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };
    updateRestaurants();
  }, []);

  const filteredRestaurants = useMemo(() => {
    return selectedCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  }, [selectedCategory, restaurants]);

  const onRestaurantClick = (restaurant) => {
    openRestaurantDetailModal(restaurant);
  };
  return (
    <RestaurantListContainer>
      <RestaurantListItemContainer>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            onRestaurantClick={onRestaurantClick}
          />
        ))}
      </RestaurantListItemContainer>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
