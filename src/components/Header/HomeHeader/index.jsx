import Button from '../../UI/Button';
import { Gnb, GnbTitle } from './HomeHeader.styles';
import { useModalDispatch } from '../../../contexts/ModalContext';

function HomeHeader() {
  const dispatch = useModalDispatch();

  return (
    <Gnb>
      <GnbTitle className="text-title">점심 뭐 먹지</GnbTitle>
      <Button
        label="음식점 추가"
        onClick={() => dispatch({ type: 'open_add_restaurant' })}
      >
        <img src="/src/images/add-button.png" alt="음식점 추가" />
      </Button>
    </Gnb>
  );
}

export default HomeHeader;
