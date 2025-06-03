import Modal from "./modal/Modal.jsx";
import styled from "styled-components";
import RestaurantCategory from "../category/FilteredCategoryOptions";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../recoil/ModalState.jsx";
import { useErrorBoundary } from "react-error-boundary";

const CATEGORY_MAP = {
  korean: "한식",
  chinese: "중식",
  japanese: "일식",
  western: "양식",
  asian: "아시안",
  etc: "기타",
};

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

const Label = styled.label`
  color: var(--grey-400);
  font-size: 14px;

  &::after {
    content: ${({ required }) => (required ? "'*'" : "none")};
    padding-left: 4px;
    color: var(--primary-color);
  }
`;

const HelpText = styled.span`
  color: var(--grey-300);
`;

const Input = styled.input`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  height: ${({ type }) => (type === "text" ? "44px" : "auto")};
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  resize: none;
`;

const Select = styled.select`
  padding: 8px;
  margin: 6px 0;
  height: 44px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  color: var(--grey-300);
`;

function RestaurantAddModal() {
  const setModalStateValue = useSetRecoilState(modalState);
  const { showBoundary } = useErrorBoundary();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const category = e.target.category.value;
    const alt = CATEGORY_MAP[category];
    const icon = `/assets/images/category/category-${category}.png`;
    const name = e.target.name.value;
    const description = e.target.description.value;

    const newRestaurant = {
      id,
      category,
      icon,
      alt,
      name,
      description,
    };

    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      });

      if (!response.ok) {
        throw new Error("AddModal Error");
      }

      const data = await response.json();
      console.log("새로운 음식점이 추가되었습니다:", data);
      setModalStateValue("add-success");
    } catch (error) {
      showBoundary(error);
    }
  };

  return (
    <Modal
      title="새로운 음식점"
      onClose={() => setModalStateValue(null)}
      onSubmit={handleSubmit}
    >
      <FormItem>
        <Label htmlFor="category" required>
          카테고리
        </Label>
        <Select name="category" id="category" required>
          <RestaurantCategory excludedCategories={"전체"} />
        </Select>
      </FormItem>

      <FormItem>
        <Label htmlFor="name" required>
          이름
        </Label>
        <Input type="text" name="name" id="name" required />
      </FormItem>

      <FormItem>
        <Label htmlFor="description">설명</Label>
        <TextArea name="description" id="description" cols="30" rows="5" />
        <HelpText>메뉴 등 추가 정보를 입력해 주세요.</HelpText>
      </FormItem>
    </Modal>
  );
}

export default RestaurantAddModal;
