import styled from "styled-components";

export default function Header({ setIsAddModalOpen }) {
  return (
    <HeaderWrapper>
      <Title>점심 뭐 먹지</Title>
      <AddButton
        type="button"
        onClick={setIsAddModalOpen}
        aria-label="음식점 추가"
      >
        <img src="/add-button.png" alt="음식점 추가" />
      </AddButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
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

const AddButton = styled.button`
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
