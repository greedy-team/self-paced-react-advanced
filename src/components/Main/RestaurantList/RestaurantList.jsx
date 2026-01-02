import { useQuery } from '@tanstack/react-query';
import RestaurantItem from './RestaurantItem';
import {
  RestaurantListContainer,
  RestaurantItemList,
} from './RestaurantList.styles';
import restaurantApi from '../../../api/restaurantApi';
import useRestaurantStore from '../../../stores/RestaurantStore';

function RestaurantList() {
  const { data: fetchedRestaurants, isLoading, error } = useQuery({
    queryKey: ['restaurants'],
    queryFn: restaurantApi.fetchAllRestaurants,
  });

  const selectedCategory = useRestaurantStore((state) => state.selectedCategory);

  const filteredRestaurants = selectedCategory === '전체'
    ? fetchedRestaurants
    : fetchedRestaurants.filter((restaurant) => restaurant.category === selectedCategory);

  if (isLoading) return <div>로딩 중... ⏳</div>;
  if (error) return <div>데이터를 가져오지 못했어요. ❌</div>;

  return (
    <RestaurantListContainer>
      <RestaurantItemList>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantItemList>
    </RestaurantListContainer>
  );
}

export default RestaurantList;
