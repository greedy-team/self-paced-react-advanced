import styles from './GlobalNavigationBar.module.css';

export default function GlobalNavigationBar({ showAddRestaurantModal }) {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnbTitle} text-title`}>점심 뭐 먹지</h1>
      <button type="button" className={styles.gnbButton} aria-label="음식점 추가" onClick={showAddRestaurantModal}>
        <img src="templates/add-button.png" alt="음식점 추가" />
      </button>
    </header>
  );
}
