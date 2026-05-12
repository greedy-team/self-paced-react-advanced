import styled from "styled-components";

const CATEGORY_ICON_MAP = {
  한식: "/category-korean.png",
  중식: "/category-chinese.png",
  일식: "/category-japanese.png",
  양식: "/category-western.png",
  아시안: "/category-asian.png",
  기타: "/category-etc.png",
};

const ListContainer = styled.section`
  padding: 16px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RestaurantItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CategoryIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fbeae1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const RestaurantName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--grey-500);
`;

const RestaurantDescription = styled.p`
  font-size: 14px;
  color: var(--grey-400);
  line-height: 1.4;
`;

export default function RestaurantList({ restaurants, setSelectedRestaurant }) {
  const handleClickRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <ListContainer>
      <StyledList>
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            onClick={() => handleClickRestaurant(restaurant)}
            role="button"
            tabIndex={0}
          >
            <CategoryIconWrapper>
              <img
                src={CATEGORY_ICON_MAP[restaurant.category]}
                alt={restaurant.category}
              />
            </CategoryIconWrapper>
            <InfoContainer>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantDescription>
                {restaurant.description}
              </RestaurantDescription>
            </InfoContainer>
          </RestaurantItem>
        ))}
      </StyledList>
    </ListContainer>
  );
}
