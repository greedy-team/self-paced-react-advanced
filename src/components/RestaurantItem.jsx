import categoryAsian from "../assets/category-asian.png";
import categoryChinese from "../assets/category-chinese.png";
import categoryEtc from "../assets/category-etc.png";
import categoryJapanese from "../assets/category-japanese.png";
import categoryKorean from "../assets/category-korean.png";
import categoryWestern from "../assets/category-western.png";
import styles from "./RestaurantItem.module.css";

const categoryImages = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  양식: categoryWestern,
  아시안: categoryAsian,
  기타: categoryEtc,
};

export default function RestaurantItem({ restaurant, onClick }) {
  return (
    <li className={styles.restaurant} onClick={onClick}>
      <div className={styles.category}>
        <img
          src={categoryImages[restaurant.category]}
          alt={restaurant.category}
          className={styles.categoryIcon}
        />
      </div>
      <div className={styles.info}>
        <h3 className={`${styles.name} text-subtitle`}>{restaurant.name}</h3>
        <p className={`${styles.description} text-body`}>
          {restaurant.description}
        </p>
      </div>
    </li>
  );
}
