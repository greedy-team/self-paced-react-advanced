import styles from "/src/styles/Header.module.css";
import { useRestaurantContext } from "../../context/RestaurantContext.jsx";

export default function Header() {
    const { setModalState } = useRestaurantContext();

    return (
        <header className={`${styles["gnb"]}`}>
            <h1 className={`${styles["gnb__title"]} text-title`}>점심 뭐 먹지</h1>
            <button type="button" className={`${styles["gnb__button"]}`} aria-label="음식점 추가" onClick={() => setModalState('add')}>
                <img src="/assets/images/button/add-button.png" alt="음식점 추가" />
            </button>
        </header>
    );
}
