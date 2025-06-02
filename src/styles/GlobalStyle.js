import styled from 'styled-components';

export const Typography = {
  Title: styled.h1`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: ${({ $color }) => $color || '#000'};
    margin: ${({ $margin }) => $margin || '0'};
  `,
  Subtitle: styled.h2`
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    color: ${({ $color }) => $color || '#000'};
  `,
  Body: styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ $color }) => $color || '#000'};
  `,
  Caption: styled.span`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${({ $color }) => $color || '#000'};
    
    ${({ required }) =>
      required &&
      `
        &::after {
          content: '*';
          padding-left: 4px;
          color: var(--primary-color);
        }
    `}
  `,
};
