import { useContext } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../Modal/Modal';
import categoryList from '../../../Data/categoryList';
import { AddRestaurantModalContext } from '../../../contexts/AddRestaurantModalContext';

const optionList = categoryList.filter((value) => (value !== '전체')).map((value) => (
  <option value={value} key={value}>{value}</option>
));

export default function AddRestaurantModal({ addRestaurantInfo }) {
  const {
    isVisible,
    closeAddRestaurantModal,
  } = useContext(AddRestaurantModalContext);

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
    closeAddRestaurantModal();
  };

  if (!isVisible) return null;
  return (
    <Modal onClickBackdrop={closeAddRestaurantModal} title="새로운 음식점">
      <form onSubmit={handleSubmit}>
        <FormItem required>
          <Label htmlFor="category">카테고리</Label>
          <Select name="category" id="category" required>
            {optionList}
          </Select>
        </FormItem>

        <FormItem required>
          <Label htmlFor="name">이름</Label>
          <Input type="text" name="name" id="name" required />
        </FormItem>

        <FormItem>
          <Label htmlFor="description">설명</Label>
          <TextArea name="description" id="description" cols="30" rows="5" />
          <Span>메뉴 등 추가 정보를 입력해 주세요.</Span>
        </FormItem>

        <ButtonContainer>
          <Button type="submit">추가하기</Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
}

const textCaption = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

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
`;

const Label = styled.label`
  color: var(--grey-400);
  ${textCaption}
   
`;

const sharedStyle = css`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
`;

const Input = styled.input`
  ${sharedStyle}
  border-radius: 8px;
  font-size: 16px;
  
  ${(props) => (props.name === 'name')
    && css`height: 44px; `}
`;

const TextArea = styled.textarea`
${sharedStyle}
  border-radius: 8px;
  font-size: 16px;
  
  resize: none;
`;

const Select = styled.select`
  ${sharedStyle}
  border-radius: 8px;
  font-size: 16px;

  height: 44px;
  color: var(--grey-300);
`;

const Span = styled.span`
  color: var(--grey-300);

  ${textCaption}
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

  ${textCaption}

  &:last-child {
    margin-right: 0;
  }
`;
