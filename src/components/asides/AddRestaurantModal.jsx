import { useState } from "react";
import Modal from "../../modals/Modal";
import styles from "./RestaurantModal.module.css";

function AddRestaurantModal({ isOpen, onClose, categoryOptions, onAddRestaurant }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    category: categoryOptions[0]?.value || "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRestaurant(formData);
    setFormData({
      category: categoryOptions[0]?.value || "",
      name: "",
      description: "",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={`${styles["modal-title"]} ${styles["text-title"]}`}>
        새로운 음식점
      </h2>
      <form onSubmit={handleSubmit}>
        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="category" className={styles["text-caption"]}>
            카테고리
          </label>
          <select
            name="category"
            id="category"
            required
            value={formData.category}
            onChange={handleChange}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div
          className={`${styles["form-item"]} ${styles["form-item--required"]}`}
        >
          <label htmlFor="name" className={styles["text-caption"]}>
            이름
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles["form-item"]}>
          <label htmlFor="description" className={styles["text-caption"]}>
            설명
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <span className={`${styles["help-text"]} ${styles["text-caption"]}`}>
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className={styles["button-container"]}>
          <button
            className={`${styles["button"]} ${styles["button--primary"]} ${styles["text-caption"]}`}
          >
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
