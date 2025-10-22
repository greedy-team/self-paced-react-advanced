import Modal from "./modal/Modal.jsx";
import styled from "styled-components";
import useRestaurantStore from "../../store/restaurantStore";
import useModalStore from "../../store/modalStore";

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const Description = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

function RestaurantDetailModal() {
  const selectedRestaurantItem = useRestaurantStore(
    (state) => state.selectedRestaurantItem
  );

  const setModal = useModalStore((state) => state.setModal);

  return (
    <Modal
      title={selectedRestaurantItem.name}
      onClose={() => setModal(null)}
      isButtonOpen
    >
      <RestaurantInfo>
        <Description>{selectedRestaurantItem.description}</Description>
      </RestaurantInfo>
    </Modal>
  );
}

export default RestaurantDetailModal;
