import addButton from '../../assets/add-button.png';
import styled from 'styled-components';
import { useModalActions } from '../../store/appStore';

const NEAR_WHITE = '#fcfcfd';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  color: ${NEAR_WHITE};
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

const Header = () => {
  const { openRestaurantAddModal } = useModalActions();

  return (
    <HeaderContainer>
      <Title>점심 뭐 먹지</Title>
      <AddRestaurantButton
        type="button"
        aria-label="음식점 추가"
        onClick={() => dispatch(openRestaurantAddModal())}
      >
        <AddRestaurantImg src={addButton} alt="음식점 추가" />
      </AddRestaurantButton>
    </HeaderContainer>
  );
};

export default Header;
