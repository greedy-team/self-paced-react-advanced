import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantListItemContainer = styled.ul`
  list-style: none;
`;

const RestaurantList = ({ restaurants, onOpenModal, onSelectRestaurant }) => {
  const onRestaurantClick = (restaurant) => {
    onSelectRestaurant(restaurant);
    onOpenModal(true);
  };
  return (
    <RestaurantListContainer>
      <RestaurantListItemContainer>
        {restaurants.map((restaurant) => (
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
