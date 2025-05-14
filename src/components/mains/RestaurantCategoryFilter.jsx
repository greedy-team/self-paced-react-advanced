import styles from "./RestaurantCategoryFilter.module.css";

function RestaurantCategoryFilter({
  selectedCategory,
  setSelectedCategory,
  restaurants,
}) {
  const categories = ["전체", ...new Set(restaurants.map((r) => r.category))];

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className={styles["restaurant-filter-container"]}>
      <select
        name="category"
        id="category-filter"
        className={styles["restaurant-filter"]}
        aria-label="음식점 카테고리 필터"
        value={selectedCategory}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
}

export default RestaurantCategoryFilter;
