import Modal from '../common/modal/Modal';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { detailModalState } from '../../recoil/ModalState';
import { selectedRestaurantState } from '../../recoil/SelectedRestaurantState';

const RestaurantDetailModal = () => {
  const selectedRestaurant = useRecoilValue(selectedRestaurantState);
  const setDetailModal = useSetRecoilState(detailModalState);

  return (
    <Modal
      title={selectedRestaurant.name}
      onClose={() => setDetailModal(false)}
    >
      <RestaurantInfoBox>
        <RestaurantDescription>
          {selectedRestaurant.description}
        </RestaurantDescription>
      </RestaurantInfoBox>
      <ButtonContainer>
        <StyledButton onClick={() => setDetailModal(false)}>닫기</StyledButton>
      </ButtonContainer>
    </Modal>
  );
};

export default RestaurantDetailModal;

const RestaurantInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.grey100};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;
