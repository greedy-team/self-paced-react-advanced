import { useContext } from 'react';
import Modal from '../../UI/Modal';
import {
  ModalTitle,
  RestaurantInfo,
  ButtonContainer,
  Button,
} from '../RestaurantModal.styles';
import ModalContext from '../../../contexts/ModalContext';

function RestaurantDetailModal({ restaurant }) {
  const { setIsRestaurantDetailModalOpen } = useContext(ModalContext);

  const handleClose = () => {
    setIsRestaurantDetailModalOpen(false);
  };

  return (
    <Modal onClose={(handleClose)}>
      <ModalTitle>{restaurant.name}</ModalTitle>
      <RestaurantInfo>
        <p>{restaurant.description}</p>
      </RestaurantInfo>
      <ButtonContainer>
        <Button $variant="primary" type="button" onClick={handleClose}>
          닫기
        </Button>
      </ButtonContainer>
    </Modal>
  );
}

export default RestaurantDetailModal;
