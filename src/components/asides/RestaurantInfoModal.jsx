import { useContext } from "react";
import RestaurantContext from "../../contexts/RestaurantContext";
import ModalTypes from "../../constants/modalTypes";
import Modal from "../modals/Modal";
import {
  InfoModalTitle,
  RestaurantInfo,
  RestaurantInfoDescription,
  InfoModalButtonContainer,
  InfoModalCloseButton,
  CloseButtonText,
} from "./RestaurantInfoModal.styled";

function RestaurantInfoModal() {
  const { openModal, setOpenModal, selectedRestaurant } =
    useContext(RestaurantContext);

  const isOpen = openModal === ModalTypes.INFO;
  if (!isOpen || !selectedRestaurant) return null;

  return (
    <Modal isOpen={isOpen} onClose={() => setOpenModal(null)}>
      <InfoModalTitle>{selectedRestaurant.name}</InfoModalTitle>
      <RestaurantInfo>
        <RestaurantInfoDescription>
          {selectedRestaurant.description}
        </RestaurantInfoDescription>
      </RestaurantInfo>
      <InfoModalButtonContainer>
        <InfoModalCloseButton onClick={() => setOpenModal(null)}>
          <CloseButtonText>닫기</CloseButtonText>
        </InfoModalCloseButton>
      </InfoModalButtonContainer>
    </Modal>
  );
}

export default RestaurantInfoModal;
