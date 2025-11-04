import Modal from '../ui/Modal';
import styles from './RestaurantModal.module.css';

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2 className={`${styles.modalTitle} text-title`}>{restaurant.name}</h2>
      <div className={styles.restaurantInfo}>
        <p className="text-body">{restaurant.description}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary} text-caption`}
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}

export default RestaurantDetailModal;
