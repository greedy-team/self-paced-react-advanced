import styles from '../RestaurantModal.module.css';
import Modal from '../Modal/Modal';
import categoryList from '../../../Data/categoryList';

const optionList = categoryList.filter((value) => (value !== '전체')).map((value) => (
  <option value={value} key={value}>{value}</option>
));

export default function AddRestaurantModal({ isVisible, closeModal, addRestaurantInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newRestaurant = {
      id: String(Date.now()),
      name: formData.get('name'),
      description: formData.get('description'),
      category: formData.get('category'),
    };
    addRestaurantInfo(newRestaurant);
    closeModal();
  };

  if (!isVisible) return null;
  return (
    <Modal onClickBackdrop={closeModal}>
      <h2 className={`${styles.modalTitle} text-title`}>새로운 음식점</h2>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="category" className="text-caption">카테고리</label>
          <select name="category" id="category" required>
            {optionList}
          </select>
        </div>

        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="name" className="text-caption">이름</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className={styles.formItem}>
          <label htmlFor="description" className="text-caption">설명</label>
          <textarea name="description" id="description" cols="30" rows="5" />
          <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.button} ${styles.buttonPrimary} text-caption`}>추가하기</button>
        </div>
      </form>
    </Modal>
  );
}
