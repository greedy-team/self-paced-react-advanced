import { useSelector, useDispatch } from "react-redux";
import { closeModalType } from "../../redux/slice/modalSlice";
import MODAL_TYPES from "../../constants/modalTypes";
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
  const modalType = useSelector((state) => state.modal);
  const selectedRestaurant = useSelector(
    (state) => state.restaurants.selectedRestaurant
  );
  const dispatch = useDispatch();
  const isInfoModalOpen = modalType === MODAL_TYPES.INFO;

  if (!isInfoModalOpen) return null;

  const handleCloseModal = () => {
    dispatch(closeModalType());
  };

  return (
    <Modal isOpen={isInfoModalOpen} onClose={handleCloseModal}>
      <InfoModalTitle>{selectedRestaurant.name}</InfoModalTitle>
      <RestaurantInfo>
        <RestaurantInfoDescription>
          {selectedRestaurant.description}
        </RestaurantInfoDescription>
      </RestaurantInfo>
      <InfoModalButtonContainer>
        <InfoModalCloseButton onClick={handleCloseModal}>
          <CloseButtonText>닫기</CloseButtonText>
        </InfoModalCloseButton>
      </InfoModalButtonContainer>
    </Modal>
  );
}

export default RestaurantInfoModal;
