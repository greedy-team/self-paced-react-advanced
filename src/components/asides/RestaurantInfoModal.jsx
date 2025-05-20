import Modal from "../modals/Modal";
import {
  InfoModalTitle,
  RestaurantInfo,
  RestaurantInfoDescription,
  InfoModalButtonContainer,
  InfoModalCloseButton,
  CloseButtonText,
} from "./RestaurantInfoModal.styled";

function RestaurantInfoModal({ isOpen, onClose, restaurant }) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <InfoModalTitle>{restaurant.name}</InfoModalTitle>
      <RestaurantInfo>
        <RestaurantInfoDescription>
          {restaurant.description}
        </RestaurantInfoDescription>
      </RestaurantInfo>
      <InfoModalButtonContainer>
        <InfoModalCloseButton onClick={onClose}>
          <CloseButtonText>닫기</CloseButtonText>
        </InfoModalCloseButton>
      </InfoModalButtonContainer>
    </Modal>
  );
}

export default RestaurantInfoModal;
