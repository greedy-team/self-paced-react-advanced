import styled from 'styled-components';
import Modal from '../Modal/Modal';

export default function RestaurantDetailModal({ isVisible, onClose, restaurantInfo }) {
  if (!isVisible) return null;
  return (
    <Modal onClickBackdrop={onClose} title={restaurantInfo.name}>
      <DescriptionContainer>
        <Description>{restaurantInfo.description}</Description>
      </DescriptionContainer>

      <ButtonContainer>
        <Button type="button" onClick={onClose}>닫기</Button>
      </ButtonContainer>
    </Modal>
  );
}

const DescriptionContainer = styled.div`
  margin-bottom: 24px;
`;

const Description = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  background: var(--primary-color);

  color: var(--grey-100);

  &:last-child {
    margin-right: 0;
  }
`;
