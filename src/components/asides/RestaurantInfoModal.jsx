import Modal from "../../modals/Modal";
import {
  InfoModalTitle,
  RestaurantInfo,
  RestaurantInfoDescription,
  InfoModalButtonContainer,
  InfoModalCloseButton,
} from "./RestaurantInfoModal.styled";
import { TextBody, TextCaption } from "../../styles/typography";

function RestaurantInfoModal({ isOpen, onClose, restaurant }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <InfoModalTitle>{restaurant.name}</InfoModalTitle>
      <RestaurantInfo>
        <RestaurantInfoDescription>
          <TextBody>{restaurant.description}</TextBody>
        </RestaurantInfoDescription>
      </RestaurantInfo>
      <InfoModalButtonContainer>
        <InfoModalCloseButton onClick={onClose}>
          <TextCaption>닫기</TextCaption>
        </InfoModalCloseButton>
      </InfoModalButtonContainer>
    </Modal>
  );
}

export default RestaurantInfoModal;
