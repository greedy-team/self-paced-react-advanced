import Modal from '../UI/Modal';
import styles from './RestaurantModal.module.css';

function RestaurantDetailModal() {
  return (
    <Modal>
      <h2 className={`${styles.modalTitle} text-title`}>음식점 이름</h2>
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantInfodescription} text-body`}>음식점 소개 문구</p>
      </div>

      <div className={styles.buttonContainer}>
        <button type="button" className={`${styles.button} ${styles.buttonPrimary} text-caption`}>닫기</button>
      </div>
    </Modal>
  );
}

export default RestaurantDetailModal;
