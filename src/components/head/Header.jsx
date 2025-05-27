import styled from "styled-components";
import { useModalContext } from "../../context/ModalContext.jsx";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);
`;

const Title = styled.h1`
  color: #fcfcfd;
`;

const Button = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`;

function Header() {
  const { setModalState } = useModalContext();

  return (
    <HeaderContainer>
      <Title>점심 뭐 먹지</Title>
      <Button
        type="button"
        aria-label="음식점 추가"
        onClick={() => setModalState("add")}
      >
        <img src="/assets/images/button/add-button.png" alt="음식점 추가" />
      </Button>
    </HeaderContainer>
  );
}

export default Header;
