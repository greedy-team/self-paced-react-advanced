import Modal from './modal/Modal.jsx';
import styled from 'styled-components';
import { useRestaurantContext } from '../../context/RestaurantContext.jsx';

const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

const Description = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default function RestaurantDetailModal() {
  const { restaurantItem, setModalState } = useRestaurantContext();

  return (
    <Modal title={restaurantItem.name} onClose={() => setModalState('list')} isButtonOpen>
      <RestaurantInfo>
        <Description>{restaurantItem.description}</Description>
      </RestaurantInfo>
    </Modal>
  );
}
