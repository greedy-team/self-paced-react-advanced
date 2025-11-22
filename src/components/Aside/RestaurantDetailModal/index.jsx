import { useContext } from 'react';
import Modal from '../../UI/Modal';
import {
  ModalTitle,
  RestaurantInfo,
  ButtonContainer,
  Button,
} from '../RestaurantModal.styles';
import ModalContext from '../../../contexts/ModalContext';
import RestaurantContext from '../../../contexts/RestaurantContext';

function RestaurantDetailModal() {
  const { isRestaurantDetailModalOpen, setIsRestaurantDetailModalOpen } = useContext(ModalContext);

  const { selectedRestaurant } = useContext(RestaurantContext);

  const handleClose = () => {
    setIsRestaurantDetailModalOpen(false);
  };

  return (
    isRestaurantDetailModalOpen && (
    <Modal onClose={handleClose}>
      <ModalTitle>{selectedRestaurant.name}</ModalTitle>
      <RestaurantInfo>
        <p>{selectedRestaurant.description}</p>
      </RestaurantInfo>
      <ButtonContainer>
        <Button $variant="primary" type="button" onClick={handleClose}>
          닫기
        </Button>
      </ButtonContainer>
    </Modal>
    )
  );
}

export default RestaurantDetailModal;
