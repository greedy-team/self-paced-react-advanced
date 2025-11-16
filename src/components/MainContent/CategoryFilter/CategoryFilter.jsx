import styled from 'styled-components';
import categoryList from '../../../Data/categoryList';

export default function CategoryFilter({ category, onChangeCategory }) {
  const optionList = categoryList.map((value) => (
    <option value={value} key={value}>{value}</option>
  ));

  return (
    <CategoryFilterContainer>
      <select
        name="category"
        id="category-filter"
        value={category}
        onChange={(e) => onChangeCategory(e.target.value)}
        aria-label="음식점 카테고리 필터"
      >
        {optionList}
      </select>
    </CategoryFilterContainer>
  );
}

const CategoryFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;

  select{
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    background: transparent;

    font-size: 16px;
    
    padding: 8px;
  }
`;
