import styled from "styled-components";
import FilteredCategoryOptions from "../category/FilteredCategoryOptions";
import useCategoryStore from "../../store/categoryStore";

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;
`;

const SelectCategory = styled.select`
  height: 44px;
  min-width: 125px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  padding: 8px;
`;

const RestaurantFilter = () => {
  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <FilterContainer>
      <SelectCategory
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        onChange={handleChange}
      >
        <FilteredCategoryOptions excludedCategories={"선택해 주세요"} />
      </SelectCategory>
    </FilterContainer>
  );
};

export default RestaurantFilter;
