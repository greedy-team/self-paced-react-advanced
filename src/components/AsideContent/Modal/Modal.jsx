import styled from 'styled-components';

export default function Modal({ children, onClickBackdrop, title }) {
  return (
    <ModalContainer>
      <ModalBackdrop
        role="button"
        tabIndex={0}
        onClick={onClickBackdrop}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClickBackdrop();
          }
        }}
        aria-label="모달 백드롭"
      />
      <ModalContent>
        <ModalTitle>{ title }</ModalTitle>
        { children }
      </ModalContent>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
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

const ModalContent = styled.div`
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
