import PropTypes from "prop-types";
import styled from "styled-components";
import RestaurantItem from "./RestaurantItem";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { UseCategoryStore } from "../../store/useCategoryStore";

export default function RestaurantList({ restaurants, onOpenModal }) {
  const category = UseCategoryStore((state) => state.category);
=======
import { useCategoryStore } from "../../store/useCategoryStore";

export default function RestaurantList({ restaurants, onOpenModal }) {
  const category = useCategoryStore((state) => state.category);
>>>>>>> 146db27 (refactor: CategoryFilter 및 RestaurantList 컴포넌트 Zustand 연동)
=======
import { UseCategoryStore } from "../../store/UseCategoryStore";

export default function RestaurantList({ restaurants, onOpenModal }) {
  const category = UseCategoryStore((state) => state.category);
>>>>>>> 67818a5 (fix: 스토어 임포트 경로 대소문자 불일치 수정 및 누락된 의존성 추가)
=======
import { useCategoryStore } from "../../store/useCategoryStore";

export default function RestaurantList({ restaurants, onOpenModal }) {
  const category = useCategoryStore((state) => state.category);
>>>>>>> 8d5072d (refactor: 커스텀 훅 네이밍 컨벤션 적용 및 파일 충돌 해결)

  const filteredRestaurants = restaurants.filter(
    (restaurant) => category === "전체" || restaurant.category === category,
  );

  return (
    <RestaurantListContainer>
      <ul>
        {filteredRestaurants.map((item) => (
          <RestaurantItem key={item.id} item={item} onOpenModal={onOpenModal} />
        ))}
      </ul>
    </RestaurantListContainer>
  );
}

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
