import styled from "styled-components";
import { TextTitle } from "../../styles/typography";

export const InfoModalTitle = styled(TextTitle)`
  margin-bottom: 36px;
`;

export const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

export const RestaurantInfoDescription = styled.div``;

export const InfoModalButtonContainer = styled.div`
  display: flex;
`;

export const InfoModalCloseButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  background: var(--primary-color);
  color: var(--grey-100);

  &:last-child {
    margin-right: 0;
  }
`;
