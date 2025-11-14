import React from 'react';
import StyledButton from './Button.styles';

function Button({
  className, label, onClick, children,
}) {
  return (
    <StyledButton
      as="button"
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
