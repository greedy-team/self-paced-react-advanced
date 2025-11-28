import Filter from '../../UI/Filter';
import { CATEGORIES } from '../../../data/restaurantCategories';
import RestaurantFilterContainer from './RestaurantCategoryFilter.styles';

function RestaurantCategoryFilter({ setSelectedCategory }) {
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <RestaurantFilterContainer>
      <Filter
        label="음식점 카테고리 필터"
        options={CATEGORIES}
        onChange={handleCategoryChange}
      />
    </RestaurantFilterContainer>
  );
}

export default RestaurantCategoryFilter;
