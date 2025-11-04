import styles from './HomeHeader.module.css';
import Button from '../../ui/Button';

function HomeHeader({ onRestaurantAddButtonClick }) {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnb__title} text-title`}>점심 뭐 먹지</h1>
      <Button
        className={styles.gnb__button}
        label="음식점 추가"
        onClick={onRestaurantAddButtonClick}
      >
        <img src="/src/images/add-button.png" alt="음식점 추가" />
      </Button>
    </header>
  );
}

export default HomeHeader;
