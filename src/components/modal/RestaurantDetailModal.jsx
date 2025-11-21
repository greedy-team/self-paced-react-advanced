import Modal from "./Modal";
import styled from "styled-components";
import ModalButton from "../ModalButton";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext.jsx";

export default function RestaurantDetailModal() {
  const { selectedRestaurant, closeModal } = useContext(AppContext);

  return (
    <Modal title={selectedRestaurant?.name}>
      <ModalRestaurantInfo>
        <p className="text-body">{selectedRestaurant?.description}</p>
      </ModalRestaurantInfo>
      <ModalButton onClick={closeModal} autoFocus>
        닫기
      </ModalButton>
    </Modal>
  );
}

const ModalRestaurantInfo = styled.div`
  margin-bottom: 24px;
`;
