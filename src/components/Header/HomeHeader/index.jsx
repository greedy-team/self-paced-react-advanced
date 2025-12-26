import Button from '../../UI/Button';
import { Gnb, GnbTitle } from './HomeHeader.styles';
import useModalStore from '../../../stores/ModalStore';

function HomeHeader() {
  const openAddRestaurantModal = useModalStore((state) => state.openAddRestaurantModal);

  return (
    <Gnb>
      <GnbTitle className="text-title">점심 뭐 먹지</GnbTitle>
      <Button
        label="음식점 추가"
        onClick={openAddRestaurantModal}
      >
        <img src="/src/images/add-button.png" alt="음식점 추가" />
      </Button>
    </Gnb>
  );
}

export default HomeHeader;
