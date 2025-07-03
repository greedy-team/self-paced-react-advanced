import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FilterContainer,
  CategorySelect,
} from "./RestaurantCategoryFilter.styled";
import { setSelectedCategory } from "../../redux/slice/restaurantSlice";

function RestaurantCategoryFilter() {
  const restaurants = useSelector((state) => state.restaurants.allRestaurants);
  const selectedCategory = useSelector(
    (state) => state.restaurants.selectedCategory
  );

  const dispatch = useDispatch();

  const categories = React.useMemo(
    () => [
      "전체",
      ...new Set(restaurants.map((restaurant) => restaurant.category)),
    ],
    [restaurants]
  );

  const handleChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
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
