import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { restaurantItemState } from "../../recoil/RestaurantItemState.jsx";

const RestaurantItem = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

const Category = styled.div`
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

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function RestaurantListItem({
  categoryIcon,
  categoryAlt,
  name,
  description,
  setModalStateValue,
}) {
  const setRestaurantItem = useSetRecoilState(restaurantItemState);

  const handleClick = () => {
    setRestaurantItem({ name, description });
    setModalStateValue("detail");
  };

  return (
    <RestaurantItem onClick={handleClick}>
      <Category>
        <CategoryIcon src={categoryIcon} alt={categoryAlt} />
      </Category>
      <RestaurantInfo>
        <RestaurantName>{name}</RestaurantName>
        <RestaurantDescription>{description}</RestaurantDescription>
      </RestaurantInfo>
    </RestaurantItem>
  );
}

export default RestaurantListItem;
