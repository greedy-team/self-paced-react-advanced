import { useDispatch } from "react-redux";
import ModalTypes from "../../constants/modalTypes";
import { setModalType } from "../../redux/slice/modalSlice";
import { GnbContainer, GnbTitle, GnbButton, GnbIcon } from "./Gnb.styled";

function Gnb() {
  const dispatch = useDispatch();

  const handleAddRestaurant = () => {
    dispatch(setModalType(ModalTypes.ADD));
  };

  return (
    <GnbContainer>
      <GnbTitle>점심 뭐 먹지</GnbTitle>
      <GnbButton
        type="button"
        onClick={handleAddRestaurant}
        aria-label="음식점 추가"
      >
        <GnbIcon src="/templates/add-button.png" alt="음식점 추가" />
      </GnbButton>
    </GnbContainer>
  );
}

export default Gnb;
