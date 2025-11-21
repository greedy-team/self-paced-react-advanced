import { useState } from 'react';
import Modal from '../../UI/Modal';
import { CATEGORIES, CATEGORY_IMAGE } from '../../../data/restaurantCategories';
import {
  ModalTitle,
  FormItem,
  ButtonContainer,
  Button,
} from '../RestaurantModal.styles';

function AddRestaurantModal({ onAddRestaurant, onClose }) {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRestaurant = () => {
    const newRestaurant = {
      id: crypto.randomUUID(),
      category,
      name,
      description,
      image: CATEGORY_IMAGE[category],
    };
    onAddRestaurant(newRestaurant);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <ModalTitle>새로운 음식점</ModalTitle>
      <form>
        <FormItem $required>
          <label htmlFor="category">카테고리</label>
          <select
            name="category"
            id="category"
            required
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">선택해 주세요</option>
            {CATEGORIES.filter(c => c !== '전체').map(categoryOption => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
        </FormItem>

        <FormItem $required>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormItem>

        <FormItem>
          <label htmlFor="description">설명</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <span className="helpText">메뉴 등 추가 정보를 입력해 주세요.</span>
        </FormItem>

        <ButtonContainer>
          <Button
            $variant="primary"
            type="button"
            onClick={handleAddRestaurant}
          >
            추가하기
          </Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
