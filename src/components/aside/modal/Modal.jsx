import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
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

  background: ${({ $isPrimary }) =>
    $isPrimary ? "var(--primary-color)" : "transparent"};
  color: ${({ $isPrimary }) =>
    $isPrimary ? "var(--grey-100)" : "var(--grey-300)"};
  border: ${({ $isPrimary }) =>
    !$isPrimary ? "1px solid var(--grey-300)" : "none"};

  &:last-child {
    margin-right: 0;
  }
`;

function Modal({ title, children, onClose, onSubmit, isButtonOpen = true }) {
  return (
    <ModalWrapper $isOpen={true}>
      <ModalBackdrop onClick={onClose} />
      <ModalContainer>
        {title && <ModalTitle>{title}</ModalTitle>}
        <form onSubmit={onSubmit || ((e) => e.preventDefault())}>
          {children}
          {isButtonOpen && (
            <ButtonContainer>
              <Button
                type={onSubmit ? "submit" : "button"}
                onClick={!onSubmit ? onClose : undefined}
                $isPrimary={true}
              >
                {onSubmit ? "추가하기" : "닫기"}
              </Button>
            </ButtonContainer>
          )}
        </form>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default Modal;
