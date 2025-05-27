import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import insertImgSrc from '../utils/insertImgSrc';
import { useRestaurantContext } from '../../hooks/useRestaurantContext';
import { useState } from 'react';
import { useSelectedRestaurantContext } from '../../hooks/useSelectedRestaurantContext';
import { useModalStateContext } from '../../hooks/useModalStateContext';

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RestaurantItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: var(--lighten-color);
`;

const CategoryImage = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const RestaurantListComponent = ({ category }) => {
  const { restaurants } = useRestaurantContext();
  const { setSelectedRestaurant } = useSelectedRestaurantContext();
  const { setIsModalOpen } = useModalStateContext();

  const filteredRestaurants = category === '전체'
  ? restaurants
  : restaurants.filter(restaurant => restaurant.category === category);

  const handleRestaurantClick = (restaurantId) => {
    setIsModalOpen(true);
    setSelectedRestaurant(restaurantId);
  };

  return (
    <RestaurantListContainer>
      <RestaurantList>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem 
            key={restaurant.id} 
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <CategoryIcon>
              <CategoryImage
                src={insertImgSrc[restaurant.category]}
                alt={restaurant.category}
              />
            </CategoryIcon>
            <RestaurantInfo>
              <Typography.Subtitle>
                {restaurant.name}
              </Typography.Subtitle>
              <RestaurantDescription>
                <Typography.Body>
                  {restaurant.description}
                </Typography.Body>
              </RestaurantDescription>
            </RestaurantInfo>
          </RestaurantItem>
        ))}
      </RestaurantList>
    </RestaurantListContainer>
  );
};

export default RestaurantListComponent;
