import styled from 'styled-components';
import { Typography } from '../styles/GlobalStyle';
import { addModalState } from '../store/atoms';
import { useSetRecoilState } from 'recoil';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: var(--primary-color);
`;

const AddButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

const AddButtonImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Header = () => {
  const setIsAddModalOpen = useSetRecoilState(addModalState);

  return (
    <HeaderContainer>
      <Typography.Title color="#fcfcfd">점심 뭐 먹지</Typography.Title>
      <AddButton
        type="button"
        aria-label="음식점 추가"
        onClick={() => setIsAddModalOpen(true)}
      >
        <AddButtonImage
          src="../../templates/add-button.png"
          alt="음식점 추가"
        />
      </AddButton>
    </HeaderContainer>
  );
};

export default Header;
