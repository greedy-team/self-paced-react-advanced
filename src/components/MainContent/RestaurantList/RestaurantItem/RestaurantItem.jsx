import styles from './RestaurantItem.module.css';

const categoryImgMap = {
  한식: 'templates/category-korean.png',
  중식: 'templates/category-chinese.png',
  일식: 'templates/category-japanese.png',
  양식: 'templates/category-western.png',
  아시안: 'templates/category-asian.png',
  기타: 'templates/category-etc.png',
};

export default function RestaurantItem({ restaurantInfo, updateClickedRestaurantID }) {
  return (
    <li className={styles.restaurant}>
      <button
        className={styles.restaurantButton}
        type="button"
        onClick={() => { updateClickedRestaurantID(restaurantInfo.id); }}
      >
        <div className={styles.restaurantCategory}>
          <img
            src={categoryImgMap[restaurantInfo.category]}
            alt={restaurantInfo.category}
            className={styles.categoryIcon}
          />
        </div>
        <div className={styles.restaurantInfo}>
          <h3 className={`${styles.restaurantName} text-subtitle`}>{restaurantInfo.name}</h3>
          <p className={`${styles.restaurantDescription} text-body`}>{restaurantInfo.description}</p>
        </div>
      </button>
    </li>
  );
}
