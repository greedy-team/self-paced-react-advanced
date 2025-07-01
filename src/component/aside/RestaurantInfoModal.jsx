import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../styles/GlobalStyle';
import Modal from './Modal';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoModal } from '../../store/modalSlice';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const RestaurantInfoModal = () => {  
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal.infoModalState);
  const restaurants = useSelector(state => state.restaurants.restaurants);
  const selectedRestaurant = useSelector(state => state.restaurants.selectedRestaurant);

  if (!isModalOpen) return null;

  const restaurant = restaurants?.find(restaurant => restaurant.id === selectedRestaurant);

  const handleClose = () => {
    dispatch(setInfoModal(false));
  };

  if (!restaurant) {
    return (
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <div>데이터 불러오는중...</div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isModalOpen} onClose={handleClose}>
      <Typography.Title $margin="0 0 36px 0">
        {restaurant.name}
      </Typography.Title>
      <RestaurantInfo>
        <Typography.Body>
          {restaurant.description}
        </Typography.Body>
      </RestaurantInfo>
      <ButtonContainer>
        <Button onClick={handleClose}>
          닫기
        </Button>
      </ButtonContainer>
    </Modal>
  );
};

export default RestaurantInfoModal;
