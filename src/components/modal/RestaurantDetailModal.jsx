import Modal from "./Modal";
import styled from "styled-components";
import ModalButton from "../ModalButton";

const ModalRestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

export default function RestaurantDetailModal({ restaurantInfo, closeModal }) {
  return (
    <Modal title={restaurantInfo?.name} onBackdropClick={closeModal}>
      <ModalRestaurantInfo>
        <p className="text-body">{restaurantInfo?.description}</p>
      </ModalRestaurantInfo>
      <ModalButton onClick={closeModal} autoFocus>
        닫기
      </ModalButton>
    </Modal>
  );
}
