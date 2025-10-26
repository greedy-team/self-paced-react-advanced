import styled from 'styled-components';
import { categories } from '../../constant/constant';
import {
  useSelectedCategory,
  useRestaurantActions,
} from '../../store/appStore';
import { useQueryClient, useIsFetching } from '@tanstack/react-query';

const RestaurantFilterContainer = styled.section`
  display: flex;
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

const RestaurantRefreshButton = styled.button`
  height: 44px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 8px;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
  margin-left: auto;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const CategoryFilter = () => {
  const selectedCategory = useSelectedCategory();
  const { setSelectedCategory } = useRestaurantActions();

  const queryClient = useQueryClient();
  const isFetching = useIsFetching({ queryKey: ['restaurants'] }) > 0;
  const handleRefreshButton = () => {
    queryClient.refetchQueries({ queryKey: ['restaurants'] });
  };

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
      <RestaurantRefreshButton
        onClick={handleRefreshButton}
        disabled={isFetching}
        aria-label="레스토랑 목록 리프레시 버튼"
      >
        {isFetching ? '새로고침 중..' : '새로고침'}
      </RestaurantRefreshButton>
    </RestaurantFilterContainer>
  );
};

export default CategoryFilter;
