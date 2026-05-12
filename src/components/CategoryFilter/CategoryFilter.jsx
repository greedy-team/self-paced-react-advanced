import "./CategoryFilter.css";

import { CATEGORY_LIST } from "../../RestaurantData";

export default function CategoryFilter({ category, setCategory }) {
  const filterCategories = ["전체", ...CATEGORY_LIST];

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
        {filterCategories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </section>
  );
}
