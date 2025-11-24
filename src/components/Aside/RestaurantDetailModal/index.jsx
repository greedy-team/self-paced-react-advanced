import Modal from '../../UI/Modal';
import {
  ModalTitle,
  RestaurantInfo,
  ButtonContainer,
  Button,
} from '../RestaurantModal.styles';
import { useModalState, useModalDispatch } from '../../../contexts/ModalContext';
import { useRestaurantContext } from '../../../contexts/RestaurantContext';

function RestaurantDetailModal() {
  const { isRestaurantDetailModalOpen } = useModalState();
  const dispatch = useModalDispatch();

  const { selectedRestaurant } = useRestaurantContext();

  const handleClose = () => {
    dispatch({ type: 'close_restaurant_detail' });
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
