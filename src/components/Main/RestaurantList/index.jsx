import styles from './RestaurantList.module.css';
import RestaurantItem from './RestaurantItem';

function RestaurantList({ restaurants, onRestaurantClick }) {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onRestaurantClick={onRestaurantClick}
          />
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
