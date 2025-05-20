import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 32px 16px;
  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

export const ModalTitle = styled.h2`
  margin-bottom: 36px;
`;
