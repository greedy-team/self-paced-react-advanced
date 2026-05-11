import PropTypes from "prop-types";
import styled from "styled-components";
import "../styles/default.css";
//import '../styles/RestaurantDetailModal.css';

const OpendModal = styled.div`
  display: block;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const ModalTitle = styled.h2`
  margin-bottom: 36px;
`;

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;
  background: #ec4a0a;

  color: #ffffff;
`;
function RestaurantDetailModal({ setDetailModal, selectedRestaurant }) {
  return (
    <OpendModal>
      <ModalBackdrop
        role="button"
        tabIndex={0}
        aria-label="모달 닫기"
        onKeyDown={() => setDetailModal(false)}
        onClick={() => setDetailModal(false)}
      />
      <ModalContainer>
        <ModalTitle>{selectedRestaurant.name}</ModalTitle>
        <RestaurantInfo>
          <p className="restaurant-info__description text-body">
            {selectedRestaurant.description}
          </p>
        </RestaurantInfo>
        <ButtonContainer>
          <Button type="button" onClick={() => setDetailModal(false)}>
            닫기
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </OpendModal>
  );
}
RestaurantDetailModal.propTypes = {
  setDetailModal: PropTypes.func.isRequired,
  selectedRestaurant: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default RestaurantDetailModal;
