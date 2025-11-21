import { useContext } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import { RestaurantDetailModalContext } from '../../../contexts/RestaurantDetailModalContext';

export default function RestaurantDetailModal() {
  const {
    restaurantInfo,
    isVisible,
    updateClickedRestaurantID,
  } = useContext(RestaurantDetailModalContext);

  const closeModal = () => {
    updateClickedRestaurantID(null);
  };

  if (!isVisible) return null;
  return (
    <Modal onClickBackdrop={closeModal} title={restaurantInfo.name}>
      <DescriptionContainer>
        <Description>{restaurantInfo.description}</Description>
      </DescriptionContainer>

      <ButtonContainer>
        <Button type="button" onClick={closeModal}>닫기</Button>
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
