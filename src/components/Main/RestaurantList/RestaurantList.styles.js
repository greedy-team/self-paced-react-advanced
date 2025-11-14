import styled from 'styled-components';

export const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

export const RestaurantItemList = styled.ul.attrs({
  className: 'restaurant-list',
})``;
