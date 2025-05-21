import { useState } from "react";
import Modal from "../../modals/Modal";
import {
  AddModalTitle,
  AddModalFormItem,
  AddModalHelpText,
  AddModalInput,
  AddModalTextarea,
  AddModalSelect,
  AddModalButtonContainer,
  AddModalSubmitButton,
  AddModalLabel,
} from "./AddRestaurantModal.styled";

function AddRestaurantModal({
  isOpen,
  onClose,
  categoryOptions,
  onAddRestaurant,
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    category: categoryOptions[0]?.value || "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRestaurant(formData);
    setFormData({
      category: categoryOptions[0]?.value || "",
      name: "",
      description: "",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AddModalTitle>새로운 음식점</AddModalTitle>
      <form onSubmit={handleSubmit}>
        <AddModalFormItem>
          <AddModalLabel htmlFor="category" required>카테고리</AddModalLabel>
          <AddModalSelect
            name="category"
            id="category"
            required
            value={formData.category}
            onChange={handleChange}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </AddModalSelect>
        </AddModalFormItem>

        <AddModalFormItem>
          <AddModalLabel htmlFor="name" required>이름</AddModalLabel>
          <AddModalInput
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </AddModalFormItem>

        <AddModalFormItem>
          <AddModalLabel htmlFor="description">설명</AddModalLabel>
          <AddModalTextarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          />
          <AddModalHelpText>
            메뉴 등 추가 정보를 입력해 주세요.
          </AddModalHelpText>
        </AddModalFormItem>

        <AddModalButtonContainer>
          <AddModalSubmitButton type="submit">
            <AddModalLabel as="span">추가하기</AddModalLabel>
          </AddModalSubmitButton>
        </AddModalButtonContainer>
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
