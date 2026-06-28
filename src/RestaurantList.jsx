import styled from "styled-components";
import { useRestaurantStore } from "./stores/useRestaurantStore.js";

const CATEGORY_ICON_MAP = {
  한식: "/category-korean.png",
  중식: "/category-chinese.png",
  일식: "/category-japanese.png",
  양식: "/category-western.png",
  아시안: "/category-asian.png",
  기타: "/category-etc.png",
};

const Container = styled.section`
  padding: 0 16px;
  margin: 16px 0;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Restaurant = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;
`;

const RestaurantCategory = styled.div`
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

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantName = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
`;

const RestaurantDescription = styled.p`
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

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 16px;
  text-align: center;
  color: var(--grey-400);
`;

const RetryButton = styled.button`
  padding: 8px 16px;
  border: 1px solid var(--primary-color, #ec4a0a);
  border-radius: 8px;
  background: transparent;
  color: var(--primary-color, #ec4a0a);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export default function RestaurantList() {
  const restaurants = useRestaurantStore((state) => state.restaurants);
  const category = useRestaurantStore((state) => state.category);
  const error = useRestaurantStore((state) => state.error);
  const fetchRestaurants = useRestaurantStore(
    (state) => state.fetchRestaurants,
  );
  const setSelectedRestaurant = useRestaurantStore(
    (state) => state.setSelectedRestaurant,
  );

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((r) => r.category === category);

  if (error) {
    return (
      <Container>
        <ErrorState>
          <p>{error}</p>
          <RetryButton type="button" onClick={fetchRestaurants}>
            다시 시도
          </RetryButton>
        </ErrorState>
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {filteredRestaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            onClick={() => setSelectedRestaurant(restaurant)}
            role="button"
            tabIndex={0}
          >
            <RestaurantCategory>
              <CategoryIcon
                src={CATEGORY_ICON_MAP[restaurant.category]}
                alt={restaurant.category}
              />
            </RestaurantCategory>
            <RestaurantInfo>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantDescription>
                {restaurant.description}
              </RestaurantDescription>
            </RestaurantInfo>
          </Restaurant>
        ))}
      </List>
    </Container>
  );
}
