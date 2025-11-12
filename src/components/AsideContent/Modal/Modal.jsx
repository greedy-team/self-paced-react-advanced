import styles from '../RestaurantModal.module.css';

export default function Modal({ children, onClickBackdrop }) {
  return (
    <div className={`${styles.modal} ${styles.modalOpen}`}>
      <div
        className={styles.modalBackdrop}
        role="button"
        tabIndex={0}
        onClick={onClickBackdrop}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClickBackdrop();
          }
        }}
        aria-label="모달 백드롭"
      />
      <div className={styles.modalContainer}>
        { children }
      </div>
    </div>
  );
}
