import styled from 'styled-components';
import { useMutationState } from '@tanstack/react-query';

export default function GlobalNavigationBar({ onClickAddButton }) {
  const status = useMutationState({
    filters: { mutationKey: ['addRestaurantInfo'] },
    select: (mutation) => mutation.state.status,
  });
  const isPending = status.includes('pending');

  const handleClick = () => {
    if (isPending) {
      alert('데이터를 추가중입니다! 잠시만 기다려주십시오.');
    } else {
      onClickAddButton();
    }
  };

  return (
    <GNBContainer>
      <GNBTitle>점심 뭐 먹지</GNBTitle>
      <GNBButton type="button" aria-label="음식점 추가" onClick={handleClick}>
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
