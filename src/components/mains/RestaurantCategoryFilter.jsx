import { useContext } from "react";
import {
  FilterContainer,
  CategorySelect,
} from "./RestaurantCategoryFilter.styled";
import RestaurantContext from "../../contexts/RestaurantContext";

function RestaurantCategoryFilter() {
  const { selectedCategory, setSelectedCategory, restaurants } =
    useContext(RestaurantContext);

  const categories = ["전체", ...new Set(restaurants.map((restaurant) => restaurant.category))];

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
