import styled from 'styled-components';
import RestaurantItem from './RestaurantItem/RestaurantItem';
import useRestaurantDetailModalStore from '../../../stores/useRestaurantDetailModalStore';
import { useRestaurantInfoListQuery } from '../../../hooks/useRestaurantInfoList';

export default function RestaurantList({ category }) {
  const {
    data: restaurantInfoList,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useRestaurantInfoListQuery();

  const updateClickedRestaurantID = useRestaurantDetailModalStore(
    (state) => state.updateClickedRestaurantID,
  );

  const getFilteredRestaurantInfoList = () => {
    if (!restaurantInfoList) {
      return [];
    }
    if (category !== '전체') {
      return restaurantInfoList.filter((restaurantInfo) => (restaurantInfo.category === category));
    }
    return restaurantInfoList;
  };
  const filteredRestaurantInfoList = getFilteredRestaurantInfoList();

  if (isLoading) {
    return (
      <div>로딩 중...</div>
    );
  }
  if (isError) {
    return (
      <div>{`에러 발생: ${error.message}`}</div>
    );
  }
  if (isSuccess) {
    return (
      <ListContainer>
        <ul>
          {filteredRestaurantInfoList.map((restaurantInfo) => (
            <RestaurantItem
              key={restaurantInfo.id}
              restaurantInfo={restaurantInfo}
              onClickItem={updateClickedRestaurantID}
            />
          ))}
        </ul>
      </ListContainer>
    );
  }
}

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
