import styled from 'styled-components';
import RestaurantItem from './RestaurantItem/RestaurantItem';

export default function RestaurantList({ restaurantInfoList, onClickItem }) {
  return (
    <ListContainer>
      <ul>
        {restaurantInfoList.map((restaurantInfo) => (
          <RestaurantItem
            key={restaurantInfo.id}
            restaurantInfo={restaurantInfo}
            onClickItem={onClickItem}
          />
        ))}
      </ul>
    </ListContainer>
  );
}

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
