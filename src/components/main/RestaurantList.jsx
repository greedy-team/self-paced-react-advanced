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
  const category =
    selectedCategory === "선택해 주세요" || !selectedCategory
      ? "all"
      : selectedCategory;

  const {
    data: restaurants = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["restaurants", { category }],
    queryFn: () => getRestaurants({ category }),
    staleTime: 60_000,
    gcTime: 5 * 60_000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  if (isLoading) {
    return (
      <RestaurantListMessageBox>
        레스토랑을 불러오는 중입니다...
      </RestaurantListMessageBox>
    );
  }

  if (isError) {
    return (
      <RestaurantListMessageBox>에러: {error.message}</RestaurantListMessageBox>
    );
  }

  return (
    <RestaurantListContainer>
      {restaurants.length === 0 ? (
        <RestaurantListMessageBox>
          표시할 레스토랑이 없습니다.
        </RestaurantListMessageBox>
      ) : (
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
      )}
    </RestaurantListContainer>
  );
};

export default RestaurantList;
