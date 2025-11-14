import categories from "../../../constants/category";
import styled from "styled-components";

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;
`;

const FilterSelect = styled.select`
  height: 44px;
  min-width: 125px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  padding: 8px;
`;

export default function RestaurantCategoryFilter({
  category,
  onChangeCategory,
}) {
  return (
    <FilterContainer>
      <FilterSelect
        name="category"
        id="category-filter"
        value={category}
        onChange={(event) => onChangeCategory(event.target.value)}
        aria-label="카테고리 필터"
      >
        {categories.map((categoryItem) => (
          <option key={categoryItem.key} value={categoryItem.value}>
            {categoryItem.value}
          </option>
        ))}
      </FilterSelect>
    </FilterContainer>
  );
}
