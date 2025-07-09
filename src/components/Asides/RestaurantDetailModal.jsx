import styled from 'styled-components';
import { TEXT } from '../../constants/messages';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import { Body } from '../Common/Typography';
import { Caption } from '../Common/Typography';

import { useDispatch } from 'react-redux';
import { setDetailModalOpen } from '../../store/slices/modalSlice';
import { useSelector } from 'react-redux';
import { selectClickedRestaurant } from '../../store/selectors/restaurantSelectors';


const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

function RestaurantDetailModal() {

  const dispatch = useDispatch();
  const selectedRestaurant = useSelector(selectClickedRestaurant);


  return (
    <Modal
      handleCloseModal={() => dispatch(setDetailModalOpen(false))}
      modalTitle={selectedRestaurant?.name || TEXT.RESTAURANT_NAME_NULL}
    >
      <RestaurantInfo>
        <Body>
          {selectedRestaurant?.description || TEXT.RESTAURANT_DESCRIPTION_NULL}
        </Body>
      </RestaurantInfo>
      <Button
        $variant="modal"
        onClick={() => dispatch(setDetailModalOpen(false))}

        type="button"
      >
        <Caption>{TEXT.CLOSE_BUTTON_TEXT}</Caption>
      </Button>
    </Modal>
  );
}

export default RestaurantDetailModal;
