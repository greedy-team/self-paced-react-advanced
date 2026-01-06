import GlobalNavigationBar from './GlobalNavigationBar/GlobalNavigationBar';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import RestaurantList from './RestaurantList/RestaurantList';
import useCategoryStore from '../../stores/useCategoryStore';

export default function MainContent() {
  const category = useCategoryStore((state) => state.category);

  return (
    <main>
      <GlobalNavigationBar />
      <CategoryFilter category={category} />
      <RestaurantList category={category} />
    </main>
  );
}
