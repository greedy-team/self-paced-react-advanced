import {
  FilterContainer,
  CategorySelect,
} from "./RestaurantCategoryFilter.styled";

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
    <FilterContainer>
      <CategorySelect
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        value={selectedCategory}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </CategorySelect>
    </FilterContainer>
  );
}

export default RestaurantCategoryFilter;
