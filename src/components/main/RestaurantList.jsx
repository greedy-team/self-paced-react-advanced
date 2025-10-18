import styled from "styled-components";
import RestaurantListItem from "./RestaurantListItem.jsx";
import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../../api/restaurant.js";
import useClientStore from "../../store/clientStore.js";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantListMessageBox = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  text-align: center;
`;

const RestaurantList = () => {
  const selectedCategory = useClientStore((state) => state.selectedCategory);

  const {
    data: restaurants,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["restaurants", selectedCategory],
    queryFn: getRestaurants,
    select: (data) => {
      const categoryToFilter =
        selectedCategory === "선택해 주세요" ? "all" : selectedCategory;
      if (categoryToFilter === "all") {
        return data;
      }
      return data.filter(
        (restaurant) => restaurant.category === categoryToFilter
      );
    },
  });

  if (isLoading) {
    return (
      <RestaurantListMessageBox>
        레스토랑을 불러오는 중입니다...
      </RestaurantListMessageBox>
    );
  }

  if (isError) {
    throw new Error(`레스토랑 목록 로딩 실패: ${error.message}`);
  }

  return (
    <RestaurantListContainer>
      <ul>
        {restaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            categoryIcon={restaurant.icon}
            categoryAlt={restaurant.alt}
            name={restaurant.name}
            description={restaurant.description}
          />
        ))}
      </ul>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
