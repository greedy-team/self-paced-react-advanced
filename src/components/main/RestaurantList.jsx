import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';
import {
  useSelectedCategory,
  useRestaurantActions,
  useModalActions,
} from '../../store/appStore';
import { useRestaurants } from '../../api/hooks/useRestaurants';

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
  const selectedCategory = useSelectedCategory();
  const { setSelectedRestaurant } = useRestaurantActions();
  const { openRestaurantDetailModal } = useModalActions();

  const {
    data: restaurants = [],
    isPending,
    isError,
    error,
  } = useRestaurants(selectedCategory);
  const handleOpenRestaurantDetailModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    openRestaurantDetailModal();
  };

  if (isPending) {
    return <div>레스토랑 목록 불러오는 중...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <RestaurantListContainer>
      <RestaurantListItemContainer>
        {restaurants.map((restaurant) => (
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
