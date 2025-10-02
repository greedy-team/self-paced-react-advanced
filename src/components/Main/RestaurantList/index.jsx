import styles from './RestaurantList.module.css';
import RestaurantItem from './RestaurantItem';

function RestaurantList({ restaurants }) {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
