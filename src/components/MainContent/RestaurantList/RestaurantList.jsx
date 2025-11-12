import RestaurantItem from './RestaurantItem/RestaurantItem';
import styles from './RestaurantList.module.css';

export default function RestaurantList({ restaurantInfoList, updateClickedRestaurantID }) {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className={styles.restaurantList}>
        {restaurantInfoList.map((restaurantInfo) => (
          <RestaurantItem
            key={restaurantInfo.id}
            restaurantInfo={restaurantInfo}
            updateClickedRestaurantID={updateClickedRestaurantID}
          />
        ))}
      </ul>
    </section>
  );
}
