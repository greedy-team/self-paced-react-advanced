import PropTypes from 'prop-types';
import addButton from '../../../templates/add-button.png';
import '../styles/default.css';
import '../styles/Header.css';

function Header({ setAddModal }) {
  return (
    <header className="gnb">
      <h1 className="gnb__title text-title">점심 뭐 먹지</h1>
      <button
        type="button"
        onClick={() => setAddModal(true)}
        className="gnb__button"
        aria-label="음식점추가"
      >
        <img src={addButton} alt="음식점 추가" />
      </button>
    </header>
  );
}

Header.propTypes = {
  setAddModal: PropTypes.func.isRequired,
};
export default Header;
