import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid ${props => props.theme.colors.grey200};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.grey100};
  font-size: 16px;
  cursor: pointer;
`;

export default StyledSelect;
