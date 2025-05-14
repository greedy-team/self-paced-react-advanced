import Modal from "../../modals/Modal";
import styles from "./RestaurantModal.module.css";

function RestaurantInfoModal({ isOpen, onClose, restaurant }) {
  if(!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={`${styles["modal-title"]} ${styles["text-title"]}`}>
        {restaurant.name}
      </h2>

      <div className={styles["restaurant-info"]}>
        <p
          className={`${styles["restaurant-info__description"]} ${styles["text-body"]}`}
        >
          {restaurant.description}
        </p>
      </div>

      <div className={styles["button-container"]}>
        <button
          className={`${styles["button"]} ${styles["button--primary"]} ${styles["text-caption"]}`}
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
}

export default RestaurantInfoModal;
