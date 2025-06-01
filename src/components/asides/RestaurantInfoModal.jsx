import { useRecoilValue, useSetRecoilState } from "recoil";
import ModalTypes from "../../constants/modalTypes";
import Modal from "../modals/Modal";
import {
  modalTypeState,
  selectedRestaurantState,
} from "../../atoms/restaurantState";
import {
  InfoModalTitle,
  RestaurantInfo,
  RestaurantInfoDescription,
  InfoModalButtonContainer,
  InfoModalCloseButton,
  CloseButtonText,
} from "./RestaurantInfoModal.styled";

function RestaurantInfoModal() {
  const modalType = useRecoilValue(modalTypeState);
  const setModalType = useSetRecoilState(modalTypeState);
  const selectedRestaurant = useRecoilValue(selectedRestaurantState);

  const isInfoModalOpen = modalType === ModalTypes.INFO;

  if (!isInfoModalOpen || !selectedRestaurant) return null;

  return (
    <Modal isOpen={isInfoModalOpen} onClose={() => setModalType(null)}>
      <InfoModalTitle>{selectedRestaurant.name}</InfoModalTitle>
      <RestaurantInfo>
        <RestaurantInfoDescription>
          {selectedRestaurant.description}
        </RestaurantInfoDescription>
      </RestaurantInfo>
      <InfoModalButtonContainer>
        <InfoModalCloseButton onClick={() => setModalType(null)}>
          <CloseButtonText>닫기</CloseButtonText>
        </InfoModalCloseButton>
      </InfoModalButtonContainer>
    </Modal>
  );
}

export default RestaurantInfoModal;
