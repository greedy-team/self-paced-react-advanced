import styled from "styled-components";
import RestaurantListItem from "./RestaurantListItem.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useErrorBoundary } from "react-error-boundary";
import { fetchFilteredRestaurants } from "../../redux/restaurantsSlice.js";
import { setModal } from "../../redux/modalSlice.js";

const RestaurantListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

const EmptyRestaurantList = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  text-align: center;
`;

const RestaurantList = () => {
  const dispatch = useDispatch();
  const { showBoundary } = useErrorBoundary();

  const {
    items: restaurants,
    status,
    error,
  } = useSelector((state) => state.restaurants);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const modalStateValue = useSelector((state) => state.modal.value);

  // 카테고리 변경 시, 리스트 새로고침
  useEffect(() => {
    dispatch(fetchFilteredRestaurants());
  }, [dispatch, selectedCategory]);

  // 레스토랑 추가 시, 리스트 새로고침
  useEffect(() => {
    if (modalStateValue === "add-success") {
      dispatch(fetchFilteredRestaurants());
      dispatch(setModal(null));
    }
  }, [modalStateValue, dispatch]);

  // 에러 처리
  useEffect(() => {
    if (status === "failed") {
      showBoundary(new Error(error));
    }
  }, [status, error, showBoundary]);

  if (restaurants.length === 0) {
    return (
      <EmptyRestaurantList>
        해당 카테고리에 해당하는 레스토랑이 없습니다.
      </EmptyRestaurantList>
    );
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
