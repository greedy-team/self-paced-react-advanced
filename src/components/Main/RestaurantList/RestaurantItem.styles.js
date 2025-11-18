import styled from 'styled-components';

export const RestaurantListItem = styled.li`
  border-bottom: 1px solid ${props => props.theme.colors.grey200};
  position: relative;
`;

export const RestaurantButton = styled.button`
  background: none;
  border: none;
  padding: 16px 8px;
  margin: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const RestaurantCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: ${props => props.theme.colors.lighten};
`;

export const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RestaurantName = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
`;

export const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
