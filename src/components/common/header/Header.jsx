import styled from 'styled-components';
import addButton from '../../../assets/button/add-button.png';
import { useSetRecoilState } from 'recoil';
import { addModalState } from '../../../recoil/ModalState';

const Header = () => {
  const setAddModal = useSetRecoilState(addModalState);

  return (
    <HeaderContainer>
      <Title>점심 뭐 먹지</Title>
      <AddRestaurantButton
        type="button"
        aria-label="음식점 추가"
        onClick={() => setAddModal(true)}
      >
        <AddRestaurantImg src={addButton} alt="음식점 추가" />
      </AddRestaurantButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background: ${(props) => props.theme.primaryColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.grey100};
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const AddRestaurantButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

const AddRestaurantImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
