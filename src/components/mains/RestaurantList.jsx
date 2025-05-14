import styles from "./RestaurantList.module.css";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants, categoryIcons, onRestaurantClick }) {
  return (
    <section className={styles["restaurant-list-container"]}>
      <ul className={styles["restaurant-list"]}>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            categoryIcons={categoryIcons}
            onClick={onRestaurantClick}
          />
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
