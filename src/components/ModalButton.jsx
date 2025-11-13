import styled from "styled-components";

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
  text-caption;

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.variant === "secondary"
      ? `
    border: 1px solid var(--grey-300);
    background: transparent;
    color: var(--grey-300);
  `
      : `
    background: var(--primary-color);
    color: var(--grey-100);
  `}

`;
export default function ModalButton({
  children,
  variant = "primary",
  ...props
}) {
  return (
    <ButtonContainer>
      <Button variant={variant} {...props}>
        {children}
      </Button>
    </ButtonContainer>
  );
}
