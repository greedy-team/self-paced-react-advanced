import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 64px;
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: var(--grey-100);
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default function Header({ setIsAddModalOpen }) {
  const handleClickAddButton = () => {
    setIsAddModalOpen(true);
  };

  return (
    <HeaderContainer>
      <Title>점심 뭐 먹지</Title>
      <AddButton
        type="button"
        aria-label="음식점 추가"
        onClick={handleClickAddButton}
      >
        <img src="./add-button.png" alt="음식점 추가" />
      </AddButton>
    </HeaderContainer>
  );
}
