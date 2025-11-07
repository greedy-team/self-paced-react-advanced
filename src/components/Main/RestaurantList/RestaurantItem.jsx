import styles from './RestaurantItem.module.css';
import { CATEGORY_IMAGE } from '../../../data/restaurantsData';

function RestaurantItem({ restaurant, onRestaurantClick }) {
  return (
    <li className={styles.restaurant}>
      <button type="button" className={styles.restaurantButton} onClick={() => onRestaurantClick(restaurant)}>
        <div className={styles.restaurantCategory}>
          <img
            src={CATEGORY_IMAGE[restaurant.category]}
            alt={restaurant.category}
            className={styles.categoryIcon}
          />
        </div>
        <div className={styles.restaurantInfo}>
          <h3 className={`${styles.restaurantName} text-subtitle`}>
            {restaurant.name}
          </h3>
          <p className={`${styles.restaurantDescription} text-body`}>
            {restaurant.description}
          </p>
        </div>
      </button>
    </li>
  );
}

export default RestaurantItem;
