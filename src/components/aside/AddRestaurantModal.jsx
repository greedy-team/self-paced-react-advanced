import styled from 'styled-components';
import { selectableCategories } from '../../constant/constant';
import Modal from './modal/Modal';
import { useIsAddModalOpen, useModalActions } from '../../store/appStore';
import { useAddNewRestaurant } from '../../api/hooks/useAddNewRestaurant';

const AddRestaurantForm = styled.form``;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey400};
  font-size: 14px;

  ${(props) =>
    props.$required &&
    `
    &::after {
      padding-left: 4px;
      color: ${props.theme.colors.primary};
      content: '*';
    }
  `}
`;

const CategorySelect = styled.select`
  height: 44px;
  padding: 8px;
  margin: 6px 0;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey300};
`;

const RestaurantNameInput = styled.input`
  height: 44px;
  padding: 8px;
  margin: 6px 0;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 8px;
  font-size: 16px;
`;

const DescriptionTextarea = styled.textarea`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 8px;
  font-size: 16px;
  resize: none;
`;

const DescriptionHelpText = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  font-size: 14px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.grey100};
`;

const AddRestaurantModal = () => {
  const isRestaurantAddModalOpen = useIsAddModalOpen();
  const { closeRestaurantAddModal } = useModalActions();
  const mutation = useAddNewRestaurant();

  const handleCloseRestaurantAddModal = () => closeRestaurantAddModal();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (mutation.isPending) return;

    const newRestaurant = {
      id: e.target.name.value,
      category: e.target.category.value,
      name: e.target.name.value,
      description: e.target.description.value,
    };
    closeRestaurantAddModal();
    e.target.reset();
    mutation.mutate(newRestaurant);
  };

  return (
    <Modal
      title="새로운 음식점"
      onClose={handleCloseRestaurantAddModal}
      isOpen={isRestaurantAddModalOpen}
    >
      <AddRestaurantForm onSubmit={handleFormSubmit}>
        <FormItem>
          <Label htmlFor="category" $required>
            카테고리
          </Label>
          <CategorySelect name="category" id="category" required>
            {selectableCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </CategorySelect>
        </FormItem>

        <FormItem>
          <Label htmlFor="name" $required>
            이름
          </Label>
          <RestaurantNameInput
            type="text"
            name="name"
            id="name"
            required
            pattern=".*\S.*"
          />
        </FormItem>

        <FormItem>
          <Label htmlFor="description">설명</Label>
          <DescriptionTextarea name="description" id="description" rows="5" />
          <DescriptionHelpText>
            메뉴 등 추가 정보를 입력해 주세요.
          </DescriptionHelpText>
        </FormItem>

        <SubmitButtonContainer>
          <SubmitButton type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? '추가 중...' : '추가하기'}
          </SubmitButton>
        </SubmitButtonContainer>
      </AddRestaurantForm>
    </Modal>
  );
};

export default AddRestaurantModal;
