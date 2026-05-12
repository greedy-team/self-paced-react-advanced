import { useState } from "react";
import "./AddRestaurantModal.css";
import { CATEGORY_LIST } from "../../RestaurantData";
import Modal from "../Modal/Modal";

export default function AddRestaurantModal({ onClose, handleAddRestaurant }) {
  const [form, setForm] = useState({
    category: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddRestaurant({
      ...form,
      id: Date.now(),
    });
    onClose();
  };

  return (
    <Modal title="새로운 음식점" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="form-item form-item--required">
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <select
            name="category"
            id="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">선택해 주세요</option>
            {CATEGORY_LIST.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-item form-item--required">
          <label htmlFor="name" className="text-caption">
            이름
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="description" className="text-caption">
            설명
          </label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            cols="30"
            rows="5"
          ></textarea>
          <span className="help-text text-caption">
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className="button-container">
          <button className="button button--primary text-caption">
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
}
