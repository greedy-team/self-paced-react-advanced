import addButton from "../../assets/add-button.png";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: var(--primary-color);
`;

const HeaderTitle = styled.h1`
  color: #fcfcfd;
`;

const HeaderButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;
const HeaderButtonImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export default function Header({ openModal }) {
  return (
    <HeaderContainer>
      <HeaderTitle>점심 뭐 먹지</HeaderTitle>
      <HeaderButton type="button" aria-label="음식점 추가" onClick={openModal}>
        <HeaderButtonImage src={addButton} alt="" />
      </HeaderButton>
    </HeaderContainer>
  );
}
