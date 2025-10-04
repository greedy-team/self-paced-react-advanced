import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';
import {
  useRestaurants,
  useGetStatus,
  useSelectedCategory,
  useRestaurantActions,
  useModalActions,
} from '../../store/appStore';

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
  const restaurants = useRestaurants();
  const getStatus = useGetStatus();
  const selectedCategory = useSelectedCategory();
  const { setSelectedRestaurant } = useRestaurantActions();
  const { openRestaurantDetailModal } = useModalActions();
  const filteredRestaurants =
    selectedCategory === '전체'
      ? restaurants
      : restaurants.filter((r) => r.category === selectedCategory);
  const handleOpenRestaurantDetailModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    openRestaurantDetailModal();
  };

  if (getStatus === 'loading') {
    return <div>레스토랑 목록 불러오는 중...</div>;
  }
  if (getStatus === 'failed') {
    return <div>레스토랑 목록 불러오기 실패</div>;
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
