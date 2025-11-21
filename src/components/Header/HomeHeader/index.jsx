import { useContext } from 'react';
import Button from '../../UI/Button';
import { Gnb, GnbTitle } from './HomeHeader.styles';
import ModalContext from '../../../contexts/ModalContext';

function HomeHeader() {
  const { setIsAddRestaurantModalOpen } = useContext(ModalContext);

  return (
    <Gnb>
      <GnbTitle className="text-title">점심 뭐 먹지</GnbTitle>
      <Button label="음식점 추가" onClick={() => setIsAddRestaurantModalOpen(true)}>
        <img src="/src/images/add-button.png" alt="음식점 추가" />
      </Button>
    </Gnb>
  );
}

export default HomeHeader;
