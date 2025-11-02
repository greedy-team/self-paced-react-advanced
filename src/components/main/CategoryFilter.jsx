import styled from 'styled-components';
import { categories } from '../../constant/constant';
import {
  useSelectedCategory,
  useRestaurantActions,
} from '../../store/appStore';

const RestaurantFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;
`;

const RestaurantFilter = styled.select`
  height: 44px;
  min-width: 125px;
  padding: 8px;

  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;

const CategoryFilter = () => {
  const selectedCategory = useSelectedCategory();
  const { setSelectedCategory } = useRestaurantActions();

  return (
    <RestaurantFilterContainer>
      <RestaurantFilter
        name="category"
        id="category-filter"
        value={selectedCategory}
        aria-label="음식점 카테고리 필터"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </RestaurantFilter>
    </RestaurantFilterContainer>
  );
};

export default CategoryFilter;
