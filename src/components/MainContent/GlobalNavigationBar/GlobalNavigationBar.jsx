import { useContext } from 'react';
import styled from 'styled-components';
import { AddRestaurantModalContext } from '../../../contexts/AddRestaurantModalContext';

export default function GlobalNavigationBar() {
  const { showAddRestaurantModal } = useContext(AddRestaurantModalContext);

  return (
    <GNBContainer>
      <GNBTitle>점심 뭐 먹지</GNBTitle>
      <GNBButton type="button" aria-label="음식점 추가" onClick={showAddRestaurantModal}>
        <img src="templates/add-button.png" alt="음식점 추가" />
      </GNBButton>
    </GNBContainer>
  );
}
const GNBContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);
`;

const GNBTitle = styled.h1`
  color: #fcfcfd;
  
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const GNBButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
