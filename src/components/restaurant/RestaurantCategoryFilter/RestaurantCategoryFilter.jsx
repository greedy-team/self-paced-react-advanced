import categories from "../../../constants/category";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext.jsx";

export default function RestaurantCategoryFilter() {
  const { selectedCategory, setCategory } = useContext(AppContext);
  return (
    <FilterContainer>
      <FilterSelect
        name="category"
        id="category-filter"
        value={selectedCategory}
        onChange={(event) => setCategory(event.target.value)}
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
