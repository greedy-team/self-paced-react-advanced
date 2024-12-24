import { useState } from 'react';
import styled from 'styled-components';
import { CATEGORYOPTION } from '../constants/CategoryOption';
import Modal from '../common/modal/Modal';
import { postRestaurant } from '../../api/restaurant';
import { getRestaurant } from '../../api/restaurant';
import { v4 as uuidv4 } from 'uuid';
import { useSetRecoilState } from 'recoil';
import { restaurantsState } from '../../recoil/RestaurantListState';
import { addModalState } from '../../recoil/ModalState';

const AddRestaurantModal = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const setRestaurants = useSetRecoilState(restaurantsState);
  const setAddModal = useSetRecoilState(addModalState);

  const newRestaurant = {
    id: uuidv4(),
    category: category,
    name: name,
    description: description,
  };

  const submitFormHandler = async () => {
    try {
      const response = await postRestaurant(newRestaurant);

      if (response.ok) {
        await getRestaurant(setRestaurants);
        setAddModal(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Error posting restaurants', error);
    }
  };

  const checkFormHandler = (e) => {
    e.preventDefault();

    submitFormHandler(setRestaurants);
  };

  return (
    <Modal title="새로운 음식점" onClose={() => setAddModal(false)}>
      <form
        onSubmit={(e) => {
          checkFormHandler(e);
        }}
        type="submit"
      >
        <FormItemBox>
          <StyledLabel isRequired={true} htmlFor="category">
            카테고리
          </StyledLabel>
          <select
            name="category"
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">선택해 주세요</option>
            {CATEGORYOPTION.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </FormItemBox>
        <FormItemBox>
          <StyledLabel isRequired={true} htmlFor="name">
            이름
          </StyledLabel>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </FormItemBox>
        <FormItemBox>
          <StyledLabel htmlFor="description">설명</StyledLabel>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <span>메뉴 등 추가 정보를 입력해 주세요.</span>
        </FormItemBox>
        <ButtonConatiner>
          <StyledButton>추가하기</StyledButton>
        </ButtonConatiner>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;

const FormItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  & > select {
    color: ${(props) => props.theme.grey300};
  }

  & > span {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;
    border: 1px solid ${(props) => props.theme.grey200};
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
  }

  input[name='name'],
  input[name='link'] {
    height: 44px;
  }
`;

const StyledLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => prop !== 'isRequired',
})`
  color: ${(props) => props.theme.grey400};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  &::after {
    ${(props) =>
      props.isRequired &&
      `
        padding-left: 4px;
        color: ${props.theme.primaryColor};
        content: '*';
      `}
  }
`;

const ButtonConatiner = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.grey100};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;
