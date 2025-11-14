import Button from '../../ui/Button';
import { Gnb, GnbTitle } from './HomeHeader.styles';

function HomeHeader({ onRestaurantAddButtonClick }) {
  return (
    <Gnb>
      <GnbTitle className="text-title">점심 뭐 먹지</GnbTitle>
      <Button
        label="음식점 추가"
        onClick={onRestaurantAddButtonClick}
      >
        <img src="/src/images/add-button.png" alt="음식점 추가" />
      </Button>
    </Gnb>
  );
}

export default HomeHeader;
