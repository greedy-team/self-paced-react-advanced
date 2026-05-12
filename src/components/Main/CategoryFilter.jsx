import PropTypes from "prop-types";
import styled from "styled-components";
import foodCategory from "../../data/foodCategory";

const RestaurantFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;
const SelectedCategory = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
  padding: 8px;
`;
function CategoryFilter({ category, setCategory }) {
  return (
    <RestaurantFilterContainer>
      <SelectedCategory
        name="category"
        id="category-filter"
        className="restaurant-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="전체">전체</option>
        {foodCategory.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </SelectedCategory>
    </RestaurantFilterContainer>
  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
