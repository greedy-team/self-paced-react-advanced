import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import Modal from './Modal';
import Button from '../Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { infoModalState, selectedRestaurantState } from '../../store/atoms';
import { restaurantSelector } from '../../store/selector';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const RestaurantInfoModal = () => {  
  const [isModalOpen, setIsModalOpen] = useRecoilState(infoModalState);
  const restaurants = useRecoilValue(restaurantSelector);
  const selectedRestaurant = useRecoilValue(selectedRestaurantState);

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
      <Typography.Title $margin="0 0 36px 0">
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
