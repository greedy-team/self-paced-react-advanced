import styled from "styled-components";
import { ALL_CATEGORIES } from "../constants/categories";

const Modal = styled.div`
  display: none;
`;

const ModalOpen = styled(Modal)`
  display: block;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const Title = styled.h2`
  margin-bottom: 36px;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const HelpText = styled.span`
  color: var(--grey-300);

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;

  label {
    color: var(--grey-400);

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

  input[name="name"],
  input[name="link"] {
    height: 44px;
  }
`;

const RequiredFormItem = styled(FormItem)`
  label::after {
    padding-left: 4px;

    color: var(--primary-color);
    content: "*";
  }
`;

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

  font-size: 14px;
  line-height: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const PrimaryButton = styled(Button)`
  background: var(--primary-color);

  color: var(--grey-100);
`;

export default function AddRestaurantModal({ onAddRestaurant, onClose }) {
  return (
    <ModalOpen>
      <Backdrop onClick={onClose} />
      <Container>
        <Title>새로운 음식점</Title>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const restaurant = {
              id: crypto.randomUUID(),
              category: formData.get("category"),
              name: formData.get("name"),
              description: formData.get("description"),
            };
            await onAddRestaurant(restaurant);
            onClose();
          }}
        >
          <RequiredFormItem>
            <label htmlFor="category">카테고리</label>
            <select name="category" id="category" required>
              {ALL_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </RequiredFormItem>

          <RequiredFormItem>
            <label htmlFor="name">이름</label>
            <input type="text" name="name" id="name" required />
          </RequiredFormItem>

          <FormItem>
            <label htmlFor="description">설명</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
            <HelpText>메뉴 등 추가 정보를 입력해 주세요.</HelpText>
          </FormItem>

          <ButtonContainer>
            <PrimaryButton type="submit">추가하기</PrimaryButton>
          </ButtonContainer>
        </form>
      </Container>
    </ModalOpen>
  );
}
