import Button from '../../UI/Button';
import { Gnb, GnbTitle } from './HomeHeader.styles';
import { useModalDispatch, RESTAURANT_MODAL_ACTION_TYPES } from '../../../contexts/ModalContext';

function HomeHeader() {
  const dispatch = useModalDispatch();

  return (
    <Gnb>
      <GnbTitle className="text-title">점심 뭐 먹지</GnbTitle>
      <Button
        label="음식점 추가"
        onClick={() => dispatch({ type: RESTAURANT_MODAL_ACTION_TYPES.OPEN_ADD_RESTAURANT })}
      >
        <img src="/src/images/add-button.png" alt="음식점 추가" />
      </Button>
    </Gnb>
  );
}

export default HomeHeader;
