import styled from 'styled-components';

const categoryImgMap = {
  한식: 'templates/category-korean.png',
  중식: 'templates/category-chinese.png',
  일식: 'templates/category-japanese.png',
  양식: 'templates/category-western.png',
  아시안: 'templates/category-asian.png',
  기타: 'templates/category-etc.png',
};

export default function RestaurantItem({ restaurantInfo, onClickItem }) {
  return (
    <ListItem>
      <Button
        type="button"
        onClick={() => { onClickItem(restaurantInfo.id); }}
      >
        <CategoryImgContainer>
          <CategoryImg
            src={categoryImgMap[restaurantInfo.category]}
            alt={restaurantInfo.category}
          />
        </CategoryImgContainer>
        <RestaurantInfoContainer>
          <RestaurantName>{restaurantInfo.name}</RestaurantName>
          <RestaurantDescription>{restaurantInfo.description}</RestaurantDescription>
        </RestaurantInfoContainer>
      </Button>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  width: 100%;
  text-align: left;

  &:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.4);
    outline-offset: 2px;
  }
`;

const CategoryImgContainer = styled.div`
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

const CategoryImg = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
