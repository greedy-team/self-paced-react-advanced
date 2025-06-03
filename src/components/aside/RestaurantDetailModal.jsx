import styled from 'styled-components';
import Modal from './modal/Modal';
import { useRecoilValue } from 'recoil';
import {
  isRestaurantDetailModalOpenState,
  selectedRestaurantState,
} from '../../store/atoms';
import { useRestaurantDetailModalAction } from '../../hooks/modalAction';

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
  const isRestaurantDetailModalOpen = useRecoilValue(
    isRestaurantDetailModalOpenState
  );
  const selectedRestaurant = useRecoilValue(selectedRestaurantState);
  const { closeRestaurantDetailModal } = useRestaurantDetailModalAction();
  return (
    <Modal
      title={selectedRestaurant?.name}
      onClose={closeRestaurantDetailModal}
      isOpen={isRestaurantDetailModalOpen}
    >
      <RestaurantInfo>
        <RestaurantDescription>
          {selectedRestaurant?.description}
        </RestaurantDescription>
      </RestaurantInfo>
      <CloseButtonContainer>
        <CloseButton type="button" onClick={closeRestaurantDetailModal}>
          닫기
        </CloseButton>
      </CloseButtonContainer>
    </Modal>
  );
};

export default RestaurantDetailModal;
