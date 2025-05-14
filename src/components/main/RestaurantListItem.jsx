import styles from "/src/styles/RestaurantListItem.module.css";
import { useRestaurantContext } from "../../context/RestaurantContext.jsx";

export default function RestaurantListItem({ categoryIcon, categoryAlt, name, description }) {
    const { setRestaurantItem, setModalState } = useRestaurantContext();

    const handleClick = () => {
        setRestaurantItem({ name, description });
        setModalState('detail');
    };

    return (
        <li className={styles["restaurant"]} onClick={handleClick}>
            <div className={styles["restaurant__category"]}>
                <img src={categoryIcon} alt={categoryAlt} className={styles["category-icon"]} />
            </div>
            <div className={styles["restaurant__info"]}>
                <h3 className={`${styles["restaurant__name"]} text-subtitle`}>{name}</h3>
                <p className={`${styles["restaurant__description"]} text-body`}>{description}</p>
            </div>
        </li>
    );
}
