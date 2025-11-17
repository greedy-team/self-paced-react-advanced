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
    color: var(--grey-400);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;

    ${props =>
      props.$required &&
      `
      &::after {
        padding-left: 4px;
        color: var(--primary-color);
        content: '*';
      }
    `}
  }

  .helpText {
    color: var(--grey-300);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  select {
    height: 44px;
    padding: 8px;
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    color: var(--grey-300);
  }

  input[name='name'],
  input[name='link'] {
    height: 44px;
  }
`;

export const HelpText = styled.span`
  color: var(--grey-300);
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
        background: var(--primary-color);
        color: var(--grey-100);
      `;
    }
    if (props.$variant === 'secondary') {
      return `
        border: 1px solid var(--grey-300);
        background: transparent;
        color: var(--grey-300);
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
