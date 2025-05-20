import styled from "styled-components";
import { TextTitle, TextCaption } from "../../styles/typography";

export const AddModalTitle = styled(TextTitle)`
  margin-bottom: 36px;
`;

export const AddModalFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

export const AddModalLabel = styled(TextCaption).attrs({ as: "label" })`
  display: block;
  margin-bottom: 6px;

  ${({ required }) =>
    required &&
    `
    &::after {
      content: '*';
      color: var(--primary-color);
      padding-left: 4px;
    }
  `}
`;

export const AddModalHelpText = styled(TextCaption)`
  color: var(--grey-300);
  margin-top: 4px;
`;

export const AddModalInput = styled.input`
  padding: 8px;
  margin: 6px 0;
  height: 44px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
`;

export const AddModalTextarea = styled.textarea`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  resize: none;
`;

export const AddModalSelect = styled.select`
  height: 44px;
  padding: 8px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  color: var(--grey-300);
  font-size: 16px;
`;

export const AddModalButtonContainer = styled.div`
  display: flex;
`;

export const AddModalSubmitButton = styled.button`
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
