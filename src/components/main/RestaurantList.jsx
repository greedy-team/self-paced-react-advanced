import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { filteredRestaurantsSelector } from '../../store/selectors';
import { useRestaurantDetailModalAction } from '../../hooks/modalAction';

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
  const filteredRestaurants = useRecoilValue(filteredRestaurantsSelector);
  const { openRestaurantDetailModal } = useRestaurantDetailModalAction();

  return (
    <RestaurantListContainer>
      <RestaurantListItemContainer>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            onRestaurantClick={() => openRestaurantDetailModal(restaurant)}
          />
        ))}
      </RestaurantListItemContainer>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
