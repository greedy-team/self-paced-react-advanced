import styles from "./Header.module.css";
import addButton from "../assets/add-button.png";

export default function Header({ category, onAddClick }) {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.title} text-title`}>
        점심 뭐 먹지{category !== "전체" ? ` - ${category}` : ""}
      </h1>
      <button
        type="button"
        className={styles.button}
        aria-label="음식점 추가"
        onClick={() => onAddClick()}
      >
        <img src={addButton} alt="음식점 추가" />
      </button>
    </header>
  );
}
