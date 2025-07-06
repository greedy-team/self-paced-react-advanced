import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import insertImgSrc from '../utils/insertImgSrc';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoModal } from '../../store/modalSlice';
import { setSelectedRestaurant } from '../../store/restaurantSlice';

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 16px 0;
  `,  
  List: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `,  
  Item: styled.li`
    display: flex;
    align-items: flex-start;
    padding: 16px 8px;
    border-bottom: 1px solid #e9eaed;
    cursor: pointer;
  
    &:hover {
      background: #f5f5f5;
    }
  `,  
  CategoryIcon: styled.div`
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
  `,  
  CategoryImage: styled.img`
    width: 36px;
    height: 36px;
  `,  
  Info: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,  
  Description: styled.div`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
}


const RestaurantList = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurant.list);
  const category = useSelector((state) => state.category.category);

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  const handleRestaurantClick = (restaurantId) => {
    dispatch(setInfoModal(true));
    dispatch(setSelectedRestaurant(restaurantId));
  };

  return (
    <S.Container>
      <S.List>
        {filteredRestaurants.map((restaurant, index) => (
          <S.Item 
            key={index} 
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <S.CategoryIcon>
              <S.CategoryImage
                src={insertImgSrc[restaurant.category]}
                alt={restaurant.category}
              />
            </S.CategoryIcon>
            <S.Info>
              <Typography.Subtitle>
                {restaurant.name}
              </Typography.Subtitle>
              <S.Description>
                <Typography.Body>
                  {restaurant.description}
                </Typography.Body>
              </S.Description>
            </S.Info>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
};

export default RestaurantList;
