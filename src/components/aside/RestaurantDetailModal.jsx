import Modal from "./modal/Modal.jsx";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { restaurantState } from "../../recoil/RestaurantState.jsx";
import { modalState } from "../../recoil/ModalState.jsx";

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
  const setModalStateValue = useSetRecoilState(modalState);
  const restaurantItem = useRecoilValue(restaurantState);

  return (
    <Modal
      title={restaurantItem.name}
      onClose={() => setModalStateValue(null)}
      isButtonOpen
    >
      <RestaurantInfo>
        <Description>{restaurantItem.description}</Description>
      </RestaurantInfo>
    </Modal>
  );
}

export default RestaurantDetailModal;
