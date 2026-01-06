import RestaurantDetailModal from './RestaurantDetailModal/RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal/AddRestaurantModal';

export default function AsideContent() {
  return (
    <aside>
      <AddRestaurantModal />
      <RestaurantDetailModal />
    </aside>
  );
}
