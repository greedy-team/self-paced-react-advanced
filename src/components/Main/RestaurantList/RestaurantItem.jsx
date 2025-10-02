import styles from './RestaurantItem.module.css';

function RestaurantItem({ restaurant }) {
  return (
    <li className={styles.restaurant}>
      <div className={styles.restaurantCategory}>
        <img
          src={restaurant.image}
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
    </li>
  );
}

export default RestaurantItem;
