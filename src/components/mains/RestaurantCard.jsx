import {
  CardContainer,
  CategoryWrapper,
  CategoryIcon,
  InfoWrapper,
  RestaurantName,
  RestaurantDescription,
} from "./RestaurantCard.styled";
import { TextSubtitle, TextBody } from "../../styles/typography";

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
        <RestaurantName>
          <TextSubtitle as="span">{restaurant.name}</TextSubtitle>
        </RestaurantName>
        <RestaurantDescription>
          <TextBody as="span">{restaurant.description}</TextBody>
        </RestaurantDescription>
      </InfoWrapper>
    </CardContainer>
  );
}

export default RestaurantCard;
