import styles from "./Gnb.module.css";

function Gnb({ onAddInfoClick }) {
  return (
    <header className={styles["gnb"]}>
      <h1 className={styles["gnb__title"]}>점심 뭐 먹지</h1>
      <button
        type="button"
        className={styles["gnb__button"]}
        onClick={onAddInfoClick}
        aria-label="음식점 추가"
      >
        <img src="/templates/add-button.png" alt="음식점 추가" />
      </button>
    </header>
  );
}

export default Gnb;
