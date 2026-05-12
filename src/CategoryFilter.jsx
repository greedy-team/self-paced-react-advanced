import styled from "styled-components";

const CATEGORIES = ["전체", "한식", "중식", "일식", "양식", "아시안", "기타"];

const FilterContainer = styled.section`
  padding: 16px;
  display: flex;
  justify-content: flex-start;
`;

const SelectBox = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--grey-200);
  font-size: 16px;
  min-width: 120px;
  outline: none;

  &:focus {
    border-color: var(--primary-color);
  }
`;

export default function CategoryFilter({ category, setCategory }) {
  return (
    <FilterContainer>
      <SelectBox
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </SelectBox>
    </FilterContainer>
  );
}
