import Filter from '../../UI/Filter';
import { CATEGORIES } from '../../../data/restaurantCategories';
import RestaurantFilterContainer from './RestaurantCategoryFilter.styles';
import useRestaurantStore from '../../../stores/RestaurantStore';

function RestaurantCategoryFilter() {
  const selectedCategory = useRestaurantStore((state) => state.selectedCategory);
  const setSelectedCategory = useRestaurantStore((state) => state.setSelectedCategory);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <RestaurantFilterContainer>
      <Filter
        label="음식점 카테고리 필터"
        options={CATEGORIES}
        onChange={handleCategoryChange}
        value={selectedCategory}
      />
    </RestaurantFilterContainer>
  );
}

export default RestaurantCategoryFilter;
