import { useRecoilValue, useSetRecoilState } from "recoil";
import ModalTypes from "../../constants/modalTypes";
import Modal from "../modals/Modal";
import {
  openModalState,
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
  const openModal = useRecoilValue(openModalState);
  const setOpenModal = useSetRecoilState(openModalState);
  const selectedRestaurant = useRecoilValue(selectedRestaurantState);

  const isInfoModalOpen = openModal === ModalTypes.INFO;

  if (!isInfoModalOpen || !selectedRestaurant) return null;

  return (
    <Modal isOpen={isInfoModalOpen} onClose={() => setOpenModal(null)}>
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
