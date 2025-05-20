import {
  CardContainer,
  CategoryWrapper,
  CategoryIcon,
  InfoWrapper,
  RestaurantName,
  RestaurantDescription,
} from "./RestaurantCard.styled";

function RestaurantCard({ restaurant, categoryIcons, onClick }) {
  return (
    <CardContainer onClick={() => onClick(restaurant)}>
      <CategoryWrapper>
        <CategoryIcon
          src={categoryIcons[restaurant.category]}
          alt={restaurant.category}
        />
      </CategoryWrapper>
      <InfoWrapper>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
      </InfoWrapper>
    </CardContainer>
  );
}

export default RestaurantCard;
