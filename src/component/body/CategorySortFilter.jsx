import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/categorySlice";

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;
`;

const CategorySelect = styled.select`
  height: 44px;
  min-width: 125px;
  padding: 8px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
`;

const CategorySortFilter = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.value);

  const handleChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <FilterContainer>
      <CategorySelect
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={handleChange}
      >
        <option value="전체">전체</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
        <option value="아시안">아시안</option>
        <option value="기타">기타</option>
      </CategorySelect>
    </FilterContainer>
  );
};

export default CategorySortFilter;
