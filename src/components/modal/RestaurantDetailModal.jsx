import Modal from "./Modal";
import styled from "styled-components";
import ModalButton from "../ModalButton";

const ModalRestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const ModalResturantInfoDetail = styled.p`
  text-body;
  `;

export default function RestaurantDetailModal({ restaurantInfo, closeModal }) {
  return (
    <Modal title={restaurantInfo?.name} onBackdropClick={closeModal}>
      <ModalRestaurantInfo>
        <ModalResturantInfoDetail>
          {restaurantInfo?.description}
        </ModalResturantInfoDetail>
      </ModalRestaurantInfo>
      <ModalButton onClick={closeModal} autoFocus>
        닫기
      </ModalButton>
    </Modal>
  );
}
