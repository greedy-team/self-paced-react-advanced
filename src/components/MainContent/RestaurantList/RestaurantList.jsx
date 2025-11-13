import styled from 'styled-components';
import RestaurantItem from './RestaurantItem/RestaurantItem';

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export default function RestaurantList({ restaurantInfoList, updateClickedRestaurantID }) {
  return (
    <ListContainer>
      <ul>
        {restaurantInfoList.map((restaurantInfo) => (
          <RestaurantItem
            key={restaurantInfo.id}
            restaurantInfo={restaurantInfo}
            updateClickedRestaurantID={updateClickedRestaurantID}
          />
        ))}
      </ul>
    </ListContainer>
  );
}
