import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import Modal from './Modal';
import Button from '../Button';
import { useRestaurantContext } from '../../hooks/useRestaurantContext';
import { useSelectedRestaurantContext } from '../../hooks/useSelectedRestaurantContext';
import { useModalStateContext } from '../../hooks/useModalStateContext';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const RestaurantInfoModal = () => {  
  const { isModalOpen, setIsModalOpen } = useModalStateContext();
  const { restaurants } = useRestaurantContext();
  const { selectedRestaurant } = useSelectedRestaurantContext();
  const restaurant = restaurants.find(restaurant => restaurant.id === selectedRestaurant);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      {restaurant && (
        <>
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
        </>
      )}
    </Modal>
  );
};

export default RestaurantInfoModal;
