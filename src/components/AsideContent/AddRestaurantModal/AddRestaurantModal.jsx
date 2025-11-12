import styled, { css } from 'styled-components';
import Modal from '../Modal/Modal';
import categoryList from '../../../Data/categoryList';

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  ${(props) => props.required
    && css`
      label::after {
        content: "*";
        color: var(--primary-color);
        padding-left: 4px;
      }
    `}

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

  span {
    color: var(--grey-300);

    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
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

  background: var(--primary-color);

  color: var(--grey-100);

  &:last-child {
    margin-right: 0;
  }
`;

const optionList = categoryList.filter((value) => (value !== '전체')).map((value) => (
  <option value={value} key={value}>{value}</option>
));

export default function AddRestaurantModal({ isVisible, closeModal, addRestaurantInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newRestaurant = {
      id: String(Date.now()),
      name: formData.get('name'),
      description: formData.get('description'),
      category: formData.get('category'),
    };
    addRestaurantInfo(newRestaurant);
    closeModal();
  };

  if (!isVisible) return null;
  return (
    <Modal onClickBackdrop={closeModal} title="새로운 음식점">
      <form onSubmit={handleSubmit}>
        <FormItem required>
          <label htmlFor="category">카테고리</label>
          <select name="category" id="category" required>
            {optionList}
          </select>
        </FormItem>

        <FormItem required>
          <label htmlFor="name">이름</label>
          <input type="text" name="name" id="name" required />
        </FormItem>

        <FormItem>
          <label htmlFor="description">설명</label>
          <textarea name="description" id="description" cols="30" rows="5" />
          <span>메뉴 등 추가 정보를 입력해 주세요.</span>
        </FormItem>

        <ButtonContainer>
          <Button type="submit">추가하기</Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
}
