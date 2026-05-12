import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: relative;
  background-color: var(--grey-100);
  width: 90%;
  max-width: 400px;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--grey-500);
`;

const Description = styled.p`
  font-size: 16px;
  color: var(--grey-400);
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const PrimaryButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--lighten-color);
  }
`;

export default function RestaurantDetailModal({
  restaurant,
  setSelectedRestaurant,
}) {
  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <ModalOverlay>
      <Backdrop onClick={handleCloseModal} />
      <ModalContent>
        <Title>{restaurant.name}</Title>
        <div>
          <Description>{restaurant.description}</Description>
        </div>
        <ButtonContainer>
          <PrimaryButton onClick={handleCloseModal}>확인</PrimaryButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
}
