import { GnbContainer, GnbTitle, GnbButton, GnbIcon } from "./Gnb.styled";

function Gnb({ onAddInfoClick }) {
  return (
    <GnbContainer>
      <GnbTitle>점심 뭐 먹지</GnbTitle>
      <GnbButton
        type="button"
        onClick={onAddInfoClick}
        aria-label="음식점 추가"
      >
        <GnbIcon src="/templates/add-button.png" alt="음식점 추가" />
      </GnbButton>
    </GnbContainer>
  );
}

export default Gnb;
