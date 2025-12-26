import { useShallow } from 'zustand/react/shallow';
import Modal from '../../UI/Modal';
import {
  ModalTitle,
  RestaurantInfo,
  ButtonContainer,
  Button,
} from '../RestaurantModal.styles';
import useModalStore from '../../../contexts/ModalStore';
import useRestaurantStore from '../../../contexts/RestaurantStore';

function RestaurantDetailModal() {
  const { isRestaurantDetailModalOpen, closeRestaurantDetailModal } = useModalStore(
    useShallow((state) => ({
      isRestaurantDetailModalOpen: state.isRestaurantDetailModalOpen,
      closeRestaurantDetailModal: state.closeRestaurantDetailModal,
    })),
  );

  const selectedRestaurant = useRestaurantStore((state) => state.selectedRestaurant);

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
