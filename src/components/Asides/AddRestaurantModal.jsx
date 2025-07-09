import { useState } from 'react';
import styled from 'styled-components';
import { TEXT } from '../../constants/messages';
import { ADD_RESTAURANT_CATEGORY_FILTER } from '../../constants/category';
import { CATEGORY_ICONS } from '../../constants/icons';
import { postRestaurantData } from '../../store/thunks/restaurantThunks';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import { useDispatch } from 'react-redux';
import { setAddModalOpen } from '../../store/slices/modalSlice';
import { v4 as uuidv4 } from 'uuid';

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  label {
    color: var(--grey-400);
    font-size: 14px;
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
`;

const FormItemRequired = styled(FormItem)`
  label::after {
    padding-left: 4px;
    color: var(--primary-color);
    content: '*';
  }
`;

const HelpText = styled.span`
  color: var(--grey-300);
`;

function AddRestaurantModal() {

  const dispatch = useDispatch();

  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleCloseModal() {
    dispatch(setAddModalOpen(false));
  }


  const handleSubmitRestaurantData = event => {
    event.preventDefault();

    const newRestaurant = {
      id: uuidv4(),
      category,
      name,
      description,
      alt: category,
      categoryIcon: CATEGORY_ICONS[category],
    };

    dispatch(postRestaurantData(newRestaurant));
    dispatch(setAddModalOpen(false));
  };

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      modalTitle={TEXT.MODAL_ADD_TITLE}
    >
      <form onSubmit={handleSubmitRestaurantData}>
        <FormItemRequired>
          <label htmlFor="category" className="text-caption">
            {TEXT.MODAL_CATEGORY_TEXT}
          </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="">{TEXT.MODAL_CATEGORY_PLACEHOLDER}</option>
            {ADD_RESTAURANT_CATEGORY_FILTER.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </FormItemRequired>

        <FormItemRequired>
          <label htmlFor="name" className="text-caption">
            {TEXT.NAME_LABEL}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormItemRequired>

        <FormItem>
          <label htmlFor="description" className="text-caption">
            {TEXT.DESCRIPTION_LABEL}
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <HelpText className="text-caption">
            {TEXT.MODAL_DESCRIPTION_FOOTER}
          </HelpText>
        </FormItem>

        <Button $variant="modal" type="submit">
          {TEXT.MODAL_ADD_BUTTON_TEXT}
        </Button>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
