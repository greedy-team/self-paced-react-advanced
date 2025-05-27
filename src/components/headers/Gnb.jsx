import { useContext } from "react";
import RestaurantContext from "../../contexts/RestaurantContext";
import ModalTypes from "../../constants/modalTypes";
import { GnbContainer, GnbTitle, GnbButton, GnbIcon } from "./Gnb.styled";

function Gnb() {
  const { setOpenModal } = useContext(RestaurantContext);

  return (
    <GnbContainer>
      <GnbTitle>점심 뭐 먹지</GnbTitle>
      <GnbButton
        type="button"
        onClick={() => setOpenModal(ModalTypes.ADD)}
        aria-label="음식점 추가"
      >
        <GnbIcon src="/templates/add-button.png" alt="음식점 추가" />
      </GnbButton>
    </GnbContainer>
  );
}

export default Gnb;
