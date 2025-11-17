import Modal from '../UI/Modal';
import {
  ModalTitle,
  RestaurantInfo,
  ButtonContainer,
  Button,
} from './RestaurantModal.styles';

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal onClose={onClose}>
      <ModalTitle>{restaurant.name}</ModalTitle>
      <RestaurantInfo>
        <p>{restaurant.description}</p>
      </RestaurantInfo>
      <ButtonContainer>
        <Button $variant="primary" type="button" onClick={onClose}>
          닫기
        </Button>
      </ButtonContainer>
    </Modal>
  );
}

export default RestaurantDetailModal;
