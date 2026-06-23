import styled from "styled-components";
import addButton from "../assets/add-button.png";
import useModalStore from "../store/useModalStore";
import useRestaurantStore from "../store/useRestaurantStore";

const Gnb = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);
`;

const Title = styled.h1`
  color: #fcfcfd;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const AddButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

export default function Header() {
  const openAddModal = useModalStore((state) => state.openAddModal);
  const category = useRestaurantStore((state) => state.category);

  return (
    <Gnb>
      <Title>점심 뭐 먹지{category !== "전체" ? ` - ${category}` : ""}</Title>
      <AddButton type="button" aria-label="음식점 추가" onClick={openAddModal}>
        <img src={addButton} alt="음식점 추가" />
      </AddButton>
    </Gnb>
  );
}
