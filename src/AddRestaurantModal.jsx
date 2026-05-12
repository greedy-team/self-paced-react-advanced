import { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: relative;
  background-color: var(--grey-100);
  width: 90%;
  max-width: 400px;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--grey-500);
  margin-bottom: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: var(--grey-400);

  &.required::after {
    content: '*';
    color: var(--primary-color);
    margin-left: 4px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const HelpText = styled.span`
  font-size: 12px;
  color: var(--grey-300);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const PrimaryButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    background-color: var(--grey-200);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: var(--lighten-color);
  }
`;

export default function AddRestaurantModal({
	onAddRestaurant,
	setIsAddModalOpen,
}) {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleCloseModal = () => {
		setIsAddModalOpen(false);
	};

	const handleAddRestaurant = async e => {
		e.preventDefault();
		const form = e.target;
		const category = form.category.value;
		const name = form.name.value;
		const description = form.description.value;

		const newRestaurant = {
			id: \`a\${Date.now()}\`,
			category,
			name,
			description,
		};

		setIsSubmitting(true);

		try {
			const isAdded = await onAddRestaurant(newRestaurant);

			if (isAdded) {
				form.reset();
				handleCloseModal();
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<ModalOverlay>
			<Backdrop onClick={handleCloseModal} />
			<ModalContent>
				<Title>새로운 음식점</Title>
				<StyledForm onSubmit={handleAddRestaurant}>
					<FormItem>
						<Label htmlFor="category" className="required">
							카테고리
						</Label>
						<Select name="category" id="category" required>
							<option value="">선택해 주세요</option>
							<option value="한식">한식</option>
							<option value="중식">중식</option>
							<option value="일식">일식</option>
							<option value="양식">양식</option>
							<option value="아시안">아시안</option>
							<option value="기타">기타</option>
						</Select>
					</FormItem>

					<FormItem>
						<Label htmlFor="name" className="required">
							이름
						</Label>
						<Input type="text" name="name" id="name" required />
					</FormItem>

					<FormItem>
						<Label htmlFor="description">
							설명
						</Label>
						<TextArea
							name="description"
							id="description"
							cols="30"
							rows="5"
						/>
						<HelpText>
							메뉴 등 추가 정보를 입력해 주세요.
						</HelpText>
					</FormItem>

					<ButtonContainer>
						<PrimaryButton
							type="submit"
							disabled={isSubmitting}>
							{isSubmitting ? '추가 중...' : '추가하기'}
						</PrimaryButton>
					</ButtonContainer>
				</StyledForm>
			</ModalContent>
		</ModalOverlay>
	);
}
