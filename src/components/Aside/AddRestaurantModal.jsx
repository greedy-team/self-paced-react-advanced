import PropTypes from 'prop-types';
import '../styles/default.css';
import '../styles/AddRestaurantModal.css';
import foodCategory from '../../data/foodCategory';

function AddRestaurantModal({ setAddModal }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" />
      <div className="modal-container">
        <h2 className="modal-title text-title">새로운 음식점</h2>
        <form>
          <div className="form-item form-item--required">
            <label htmlFor="category" className="text-caption">
              카테고리
            </label>
            <select id="category" name="category" required>
              <option value="">선택해 주세요</option>
              {foodCategory.map((r) => (
                <option value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="form-item form-item--required">
            <label htmlFor="name" className="text-caption">
              이름
            </label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="form-item">
            <label htmlFor="description" className="text-caption">
              설명
            </label>
            <textarea name="description" id="description" cols="30" rows="5" />
            <span className="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
          </div>

          <div className="button-container">
            <button
              type="button"
              onClick={() => setAddModal(false)}
              className="button button--primary text-caption"
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
AddRestaurantModal.propTypes = {
  setAddModal: PropTypes.func.isRequired,
};
export default AddRestaurantModal;
