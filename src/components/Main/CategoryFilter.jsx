import PropTypes from 'prop-types';
import '../styles/default.css';
import '../styles/CategoryFilter.css';
import foodCategory from '../../data/foodCategory';

function CategoryFilter({ category, setCategory }) {
  return (
    <section className="restaurant-filter-container">
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="전체">전체</option>
        {foodCategory.map((r) => (
          <option value={r}>{r}</option>
        ))}
      </select>
    </section>
  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
