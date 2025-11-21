import styled from 'styled-components';

export const Gnb = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const GnbTitle = styled.h1`
  color: ${(props) => props.theme.colors.grey100};
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;
