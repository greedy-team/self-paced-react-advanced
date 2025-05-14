import styles from "/src/styles/RestaurantList.module.css";
import RestaurantListItem from "./RestaurantListItem.jsx";
import { useRestaurantContext } from "../../context/RestaurantContext.jsx";

export default function RestaurantList() {
  const { restaurants, selectedCategory } = useRestaurantContext();

  const filteredRestaurants = selectedCategory === "all"
    ? restaurants
    : restaurants.filter(restaurant => restaurant.category === selectedCategory);

  return (
    <section className={`${styles["restaurant-list-container"]}`}>
      <ul className={`${styles["restaurant-list"]}`}>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            categoryIcon={restaurant.icon}
            categoryAlt={restaurant.alt}
            name={restaurant.name}
            description={restaurant.description}
          />
        ))}
      </ul>
    </section>
  );
}