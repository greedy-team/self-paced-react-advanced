import styled from 'styled-components';
import Modal from './modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeRestaurantDetailModal } from '../../features/modalSlice';
import { setSelectedRestaurant } from '../../features/restaurantSlice';


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
  const dispatch = useDispatch();
  const isRestaurantDetailModalOpen = useSelector(
    (state) => state.modal.isRestaurantDetailModalOpen
  );
  const selectedRestaurant = useSelector(
    (state) => state.restaurant.selectedRestaurant
  );
  const handleCloseRestaurantDetailModal = () => {
    dispatch(closeRestaurantDetailModal());
    dispatch(setSelectedRestaurant(null));
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
