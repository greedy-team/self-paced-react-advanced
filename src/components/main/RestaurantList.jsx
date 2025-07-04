import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredRestaurants } from '../../features/selectors';
import { setSelectedRestaurant } from '../../features/restaurantSlice';
import { openRestaurantDetailModal } from '../../features/modalSlice';


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
  const dispatch = useDispatch();
  const filteredRestaurants = useSelector(selectFilteredRestaurants);
  const status = useSelector((state) => state.restaurant.status);
  const error = useSelector((state) => state.restaurant.error);

  const handleOpenRestaurantDetailModal = (restaurant) => {
    dispatch(setSelectedRestaurant(restaurant));
    dispatch(openRestaurantDetailModal());
  };

  if (status === 'loading') {
    return <div>레스토랑 목록 불러오는 중...</div>;
  }
  if (status === 'failed') {
    return <div>레스토랑 목록 불러오기 실패 ERROR: {error}</div>;
  }

  return (
    <RestaurantListContainer>
      <RestaurantListItemContainer>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            onRestaurantClick={() =>
              handleOpenRestaurantDetailModal(restaurant)
            }

          />
        ))}
      </RestaurantListItemContainer>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
