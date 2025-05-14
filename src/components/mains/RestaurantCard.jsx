import styles from "./RestaurantList.module.css";

function RestaurantCard({ restaurant, categoryIcons, onClick }) {
  return (
    <li className={styles["restaurant"]} onClick={() => onClick(restaurant)}>
      <div className={styles["restaurant__category"]}>
        <img
          src={categoryIcons[restaurant.category]}
          alt={restaurant.category}
          className={styles["category-icon"]}
        />
      </div>
      <div className={styles["restaurant__info"]}>
        <h3 className={`${styles["restaurant__name"]} text-subtitle`}>
          {restaurant.name}
        </h3>
        <p className={`${styles["restaurant__description"]} text-body`}>
          {restaurant.description}
        </p>
      </div>
    </li>
  );
}

export default RestaurantCard;
