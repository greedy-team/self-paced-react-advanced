import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Modal from "../modals/Modal";
import MODAL_TYPES from "../../constants/modalTypes";
import { modalTypeState, useAddRestaurant } from "../../atoms/restaurantState";
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

function AddRestaurantModal({ categoryOptions }) {
  const modalType = useRecoilValue(modalTypeState);
  const setModalType = useSetRecoilState(modalTypeState);
  const addRestaurant = useAddRestaurant();

  const isAddModalOpen = modalType === MODAL_TYPES.ADD;

  const [addRestaurantData, setAddRestaurantData] = useState({
    category: categoryOptions[0]?.value || "",
    name: "",
    description: "",
  });

  if (!isAddModalOpen) return null;

  const handleChange = ({ target: { name, value } }) =>
    setAddRestaurantData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    addRestaurant(addRestaurantData);
    setAddRestaurantData({
      category: categoryOptions[0]?.value || "",
      name: "",
      description: "",
    });
    setModalType(null);
  };

  const handleCloseAndReset = () => {
    setAddRestaurantData({
      category: categoryOptions[0]?.value || "",
      name: "",
      description: "",
    });
    setModalType(null);
  };

  return (
    <Modal isOpen={isAddModalOpen} onClose={handleCloseAndReset}>
      <AddModalTitle>새로운 음식점</AddModalTitle>
      <form onSubmit={handleSubmit}>
        <AddModalFormItem>
          <AddModalLabel htmlFor="category" required>
            카테고리
          </AddModalLabel>
          <AddModalSelect
            name="category"
            id="category"
            required
            value={addRestaurantData.category}
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
          <AddModalLabel htmlFor="name" required>
            이름
          </AddModalLabel>
          <AddModalInput
            name="name"
            id="name"
            required
            value={addRestaurantData.name}
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
            value={addRestaurantData.description}
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
