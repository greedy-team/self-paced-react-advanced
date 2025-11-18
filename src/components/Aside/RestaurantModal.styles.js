import styled from 'styled-components';

export const ModalTitle = styled.h2`
  margin-bottom: 36px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  label {
    color: ${props => props.theme.colors.grey400};
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;

    ${props =>
      props.$required &&
      `
      &::after {
        padding-left: 4px;
        color: ${props.theme.colors.primary};
        content: '*';
      }
    `}
  }

  .helpText {
    color: ${props => props.theme.colors.grey300};
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;
    border: 1px solid ${props => props.theme.colors.grey200};
    border-radius: 8px;
    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  select {
    height: 44px;
    padding: 8px;
    border: 1px solid ${props => props.theme.colors.grey200};
    border-radius: 8px;
    color: ${props => props.theme.colors.grey300};
  }

  input[name='name'],
  input[name='link'] {
    height: 44px;
  }
`;

export const HelpText = styled.span`
  color: ${props => props.theme.colors.grey300};
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  ${props => {
    if (props.$variant === 'primary') {
      return `
        border: none;
        background: ${props.theme.colors.primary};
        color: ${props.theme.colors.grey100};
      `;
    }
    if (props.$variant === 'secondary') {
      return `
        border: 1px solid ${props.theme.colors.grey300};
        background: transparent;
        color: ${props.theme.colors.grey300};
      `;
    }
    return `
      border: none;
      background: transparent;
    `;
  }}
`;

export const RestaurantInfo = styled.div`
  margin-bottom: 24px;

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;
