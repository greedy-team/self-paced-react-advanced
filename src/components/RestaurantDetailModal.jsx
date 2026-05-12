import styled from "styled-components";

const Modal = styled.div`
  display: none;
`;

const ModalOpen = styled(Modal)`
  display: block;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const Title = styled.h2`
  margin-bottom: 36px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const Info = styled.div`
  margin-bottom: 24px;
`;

const Description = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

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

  font-size: 14px;
  line-height: 20px;
`;

const PrimaryButton = styled(Button)`
  background: var(--primary-color);

  color: var(--grey-100);
`;

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <ModalOpen>
      <Backdrop onClick={onClose} />
      <Container>
        <Title>{restaurant.name}</Title>
        <Info>
          <Description>{restaurant.description}</Description>
        </Info>
        <ButtonContainer>
          <PrimaryButton onClick={onClose}>닫기</PrimaryButton>
        </ButtonContainer>
      </Container>
    </ModalOpen>
  );
}
