import styled from 'styled-components';
import Modal from './modal/Modal';
import {
  useIsDetailModalOpen,
  useSelectedRestaurant,
  useRestaurantActions,
  useModalActions,
} from '../../store/appStore';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const RestaurantDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const CloseButtonContainer = styled.div`
  display: flex;
`;

const CloseButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey100};

  font-size: 14px;
  line-height: 20px;
`;

const RestaurantDetailModal = () => {
  const isRestaurantDetailModalOpen = useIsDetailModalOpen();
  const selectedRestaurant = useSelectedRestaurant();
  const { setSelectedRestaurant } = useRestaurantActions();
  const { closeRestaurantDetailModal } = useModalActions();
  const handleCloseRestaurantDetailModal = () => {
    closeRestaurantDetailModal();
    setSelectedRestaurant(null);
  };
  return (
    <Modal
      title={selectedRestaurant?.name}
      onClose={handleCloseRestaurantDetailModal}
      isOpen={isRestaurantDetailModalOpen}
    >
      <RestaurantInfo>
        <RestaurantDescription>
          {selectedRestaurant?.description}
        </RestaurantDescription>
      </RestaurantInfo>
      <CloseButtonContainer>
        <CloseButton type="button" onClick={handleCloseRestaurantDetailModal}>
          닫기
        </CloseButton>
      </CloseButtonContainer>
    </Modal>
  );
};

export default RestaurantDetailModal;
