import PropTypes from 'prop-types';
import '../styles/default.css';
import '../styles/RestaurantDetailModal.css';

function RestaurantDetailModal({ setDetailModal, selectedRestaurant }) {
  return (
    <div className="modal modal--open">
      <div
        role="button"
        tabIndex={0}
        className="modal-backdrop"
        aria-label="모달 닫기"
        onKeyDown={() => setDetailModal(false)}
        onClick={() => setDetailModal(false)}
      />
      <div className="modal-container">
        <h2 className="modal-title text-title">{selectedRestaurant.name}</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">{selectedRestaurant.description}</p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button button--primary text-caption"
            onClick={() => setDetailModal(false)}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
RestaurantDetailModal.propTypes = {
  setDetailModal: PropTypes.func.isRequired,
  selectedRestaurant: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default RestaurantDetailModal;
