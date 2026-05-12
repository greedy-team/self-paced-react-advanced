import styled from "styled-components";
import Modal from "../Modal/Modal";

export default function RestaurantDetailModal({ restaurants, onClose }) {
  return (
    <Modal title={restaurants.name} onClose={onClose}>
      <InfoWrapper>
        <Description>{restaurants.description}</Description>
        <ButtonContainer>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ButtonContainer>
      </InfoWrapper>
    </Modal>
  );
}

const InfoWrapper = styled.div`
  margin-bottom: 24px;
`;

const Description = styled.p`
  line-height: 1.6;
  color: var(--grey-400);
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const CloseButton = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);
`;
