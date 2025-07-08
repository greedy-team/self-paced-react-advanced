import Modal from "./modal/Modal.jsx";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/modalSlice.js";

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
  const dispatch = useDispatch();
  const restaurantItem = useSelector(
    (state) => state.selectedRestaurantItem.value
  );

  return (
    <Modal
      title={restaurantItem.name}
      onClose={() => dispatch(setModal(null))}
      isButtonOpen
    >
      <RestaurantInfo>
        <Description>{restaurantItem.description}</Description>
      </RestaurantInfo>
    </Modal>
  );
}

export default RestaurantDetailModal;
