import Modal from '../../UI/Modal';
import {
  ModalTitle,
  RestaurantInfo,
  ButtonContainer,
  Button,
} from '../RestaurantModal.styles';
import useModalStore from '../../../contexts/ModalStore';
import { useRestaurantContext } from '../../../contexts/RestaurantContext';

function RestaurantDetailModal() {
  const isRestaurantDetailModalOpen = useModalStore((state) => state.isRestaurantDetailModalOpen);
  const closeRestaurantDetailModal = useModalStore((state) => state.closeRestaurantDetailModal);

  const { selectedRestaurant } = useRestaurantContext();

  const handleClose = () => {
    closeRestaurantDetailModal();
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
