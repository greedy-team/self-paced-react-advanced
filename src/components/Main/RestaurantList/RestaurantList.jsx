import RestaurantItem from './RestaurantItem';
import {
  RestaurantListContainer,
  RestaurantItemList,
} from './RestaurantList.styles';
import useRestaurantStore from '../../../stores/RestaurantStore';
import useRestaurants from '../../../hooks/useRestaurants';
import { Button } from '../../Aside/RestaurantModal.styles';

function RestaurantList() {
  const {
    data: fetchedRestaurants, error, refetch,
  } = useRestaurants();

  const selectedCategory = useRestaurantStore((state) => state.selectedCategory);

  if (fetchedRestaurants) {
    const filteredRestaurants = selectedCategory === '전체'
      ? fetchedRestaurants
      : fetchedRestaurants.filter((restaurant) => restaurant.category === selectedCategory);

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
  if (error) {
    return (
      <>
        <div>
          데이터를 가져오지 못했어요. ❌
        </div>
        <div>
          <Button style={{ width: 'auto' }} $variant="primary" onClick={() => refetch()}>
            재시도
          </Button>
        </div>
      </>
    );
  }
  return <div>로딩 중... ⏳</div>;
}

export default RestaurantList;
