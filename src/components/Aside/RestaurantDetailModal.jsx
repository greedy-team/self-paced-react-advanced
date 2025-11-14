import Modal from '../ui/Modal';
import {
  ModalTitle,
  RestaurantInfo,
  ButtonContainer,
  ButtonPrimary,
} from './RestaurantModal.styles';

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>{restaurant.name}</ModalTitle>
      <RestaurantInfo>
        <p>{restaurant.description}</p>
      </RestaurantInfo>
      <ButtonContainer>
        <ButtonPrimary type="button" onClick={onClose}>
          닫기
        </ButtonPrimary>
      </ButtonContainer>
    </Modal>
  );
}

export default RestaurantDetailModal;
