import { useState } from "react";
import Modal from "./Modal";
import categories from "../../constants/category";
import styled from "styled-components";
import ModalButton from "../ModalButton";
import { useRestaurants } from "../../hooks/useRestaurants.js";

export default function AddRestaurantModal({ closeModal }) {
  const onAddRestaurant = useRestaurants((state) => state.onAddRestaurant);

  const [restaurantInfo, setRestaurantInfo] = useState({
    category: "",
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurantInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await onAddRestaurant(restaurantInfo);
    closeModal();
  };

  return (
    <Modal title="새로운 음식점" onBackdropClick={closeModal}>
      <form method="post" onSubmit={handleSubmit}>
        <ModalFormItem>
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <select
            name="category"
            id="category"
            required
            value={restaurantInfo.category}
            onChange={handleChange}
            autoFocus
          >
            <option value="">선택해 주세요</option>
            {categories
              .filter((category) => category.key !== "all")
              .map((categoryItem) => (
                <option key={categoryItem.key} value={categoryItem.value}>
                  {categoryItem.value}
                </option>
              ))}
          </select>
        </ModalFormItem>

        <ModalFormItem required>
          <label htmlFor="name" className="text-caption">
            이름
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={restaurantInfo.name}
            onChange={handleChange}
          />
        </ModalFormItem>

        <ModalFormItem>
          <label htmlFor="description" className="text-caption">
            설명
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={restaurantInfo.description}
            onChange={handleChange}
          ></textarea>
          <span className="help-text text-caption">
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </ModalFormItem>

        <ModalButton type="submit" variant="primary">
          추가하기
        </ModalButton>
      </form>
    </Modal>
  );
}

const ModalFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  label {
    color: var(--grey-400);
    font-size: 14px;
  }

  ${(props) =>
    props.required &&
    `
      label::after {
        padding-left: 4px;
        color: var(--primary-color);
        content: "*";
      }
    `}

  .help-text {
    color: var(--grey-300);
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
