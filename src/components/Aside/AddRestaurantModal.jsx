import { useState } from 'react';
import styles from './RestaurantModal.module.css';
import Modal from '../ui/Modal';
import { CATEGORY_IMAGE } from '../../data/restaurantsData';

function AddRestaurantModal({ onAddRestaurant, onClose }) {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRestaurant = () => {
    const newRestaurant = {
      id: crypto.randomUUID(),
      category,
      name,
      description,
      image: CATEGORY_IMAGE[category],
    };
    onAddRestaurant(newRestaurant);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2 className={`${styles.modalTitle} text-title`}>새로운 음식점</h2>
      <form>
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="category" className="text-caption">카테고리</label>
          <select name="category" id="category" required value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">선택해 주세요</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="name" className="text-caption">이름</label>
          <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className={styles.formItem}>
          <label htmlFor="description" className="text-caption">설명</label>
          <textarea name="description" id="description" cols="30" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} />
          <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={`${styles.button} ${styles.buttonPrimary} text-caption`} onClick={handleAddRestaurant}>
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
