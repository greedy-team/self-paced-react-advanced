import Button from '../../UI/Button';
import styles from './HomeHeader.module.css';

function HomeHeader() {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnb__title} text-title`}>점심 뭐 먹지</h1>
      <Button />
    </header>
  );
}

export default HomeHeader;
