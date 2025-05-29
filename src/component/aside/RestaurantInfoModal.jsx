import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import Modal from './Modal';
import Button from '../Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { InfoModalState, restaurantsState, SelectedRestaurantState } from '../../store/atoms';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const RestaurantInfoModal = () => {  
  const [isModalOpen, setIsModalOpen] = useRecoilState(InfoModalState);
  const restaurants = useRecoilValue(restaurantsState);
  const selectedRestaurant = useRecoilValue(SelectedRestaurantState);

  if (!isModalOpen) return null;

  const restaurant = restaurants?.find(restaurant => restaurant.id === selectedRestaurant);

  if (!restaurant) {
    return (
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>데이터 불러오는중...</div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Typography.Title margin="0 0 36px 0">
        {restaurant.name}
      </Typography.Title>
      <RestaurantInfo>
        <Typography.Body>
          {restaurant.description}
        </Typography.Body>
      </RestaurantInfo>
      <ButtonContainer>
        <Button onClick={() => setIsModalOpen(false)}>
          닫기
        </Button>
      </ButtonContainer>
    </Modal>
  );
};

export default RestaurantInfoModal;
