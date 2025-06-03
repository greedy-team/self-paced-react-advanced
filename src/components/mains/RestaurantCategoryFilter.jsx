import { useRecoilValue, useRecoilState } from "recoil";
import {
  restaurantState,
  selectedCategoryState,
} from "../../atoms/restaurantState";
import {
  FilterContainer,
  CategorySelect,
} from "./RestaurantCategoryFilter.styled";

function RestaurantCategoryFilter() {
  const restaurants = useRecoilValue(restaurantState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const categories = [
    "전체",
    ...new Set(restaurants.map((restaurant) => restaurant.category)),
  ];

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
