import styled from "styled-components";
import RestaurantListItem from "./RestaurantListItem.jsx";
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
      showBoundary(new Error("레스토랑을 불러오는데 실패했습니다."));
    }
  }, [status, error, showBoundary]);

  if (status === "loading") {
    return (
      <RestaurantListMessageBox>
        레스토랑을 불러오는 중입니다...
      </RestaurantListMessageBox>
    );
  }

  if (status !== "loading" && restaurants.length === 0) {
    return (
      <RestaurantListMessageBox>
        해당 카테고리에 해당하는 레스토랑이 없습니다.
      </RestaurantListMessageBox>
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
