import PropTypes from "prop-types";
// import '../styles/default.css';
// import '../styles/AddRestaurantModal.css';
import foodCategory from "../../data/foodCategory";
import styled from "styled-components";
const OpenModal = styled.div`
  display: block;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: #ffffff;
`;

const ModalTitle = styled.h2`
  margin-bottom: 36px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;
  padding-left: 4px;
`;

const NameInput = styled.input`
  height: 44px;
  padding: 8px;
  margin: 6px 0;

  border: 1px solid #d0d5dd;
  border-radius: 8px;

  font-size: 16px;
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
  background: #ec4a0a;

  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  &.required::after {
    content: "*";
    padding-left: 4px;
    color: #ec4a0a;
  }
`;

const Select = styled.select`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid #d0d5dd;
  border-radius: 8px;

  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin: 6px 0;

  border: 1px solid #d0d5dd;
  border-radius: 8px;

  font-size: 16px;
`;
function AddRestaurantModal({ setAddModal }) {
  return (
    <OpenModal>
      <ModalBackdrop />
      <ModalContainer>
        <ModalTitle>새로운 음식점</ModalTitle>
        <form>
          <FormItem>
            <Label htmlFor="category" className="required">
              카테고리
            </Label>
            <Select id="category" name="category" required>
              <option value="">선택해 주세요</option>
              {foodCategory.map((r) => (
                <option value={r}>{r}</option>
              ))}
            </Select>
          </FormItem>

          <FormItem>
            <Label htmlFor="name" className="required" >
              이름
            </Label>
            <NameInput type="text" name="name" id="name" required />
          </FormItem>

          <FormItem>
            <Label htmlFor="description" className="text-caption">
              설명
            </Label>
            <Textarea name="description" id="description" cols="30" rows="5" />
            <span className="help-text text-caption">
              메뉴 등 추가 정보를 입력해 주세요.
            </span>
          </FormItem>

          <ButtonContainer>
            <Button
              type="button"
              onClick={() => setAddModal(false)}
              className="button button--primary text-caption"
            >
              추가하기
            </Button>
          </ButtonContainer>
        </form>
      </ModalContainer>
    </OpenModal>
  );
}
AddRestaurantModal.propTypes = {
  setAddModal: PropTypes.func.isRequired,
};
export default AddRestaurantModal;
