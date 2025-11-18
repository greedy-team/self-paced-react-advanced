import StyledButton from './Button.styles';

function Button({ className, label, onClick, children }) {
  return (
    <StyledButton
      type="button"
      className={className}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
