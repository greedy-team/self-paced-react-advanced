import RestaurantDetailModal from './RestaurantDetailModal';
import AddRestaurantModal from './AddRestaurantModal';
import { useRecoilValue } from 'recoil';
import { detailModalState, addModalState } from '../../recoil/ModalState';

function Aside() {
  const detailModal = useRecoilValue(detailModalState);
  const addModal = useRecoilValue(addModalState);

  return (
    <aside>
      {detailModal && <RestaurantDetailModal />}
      {addModal && <AddRestaurantModal />}
    </aside>
  );
}

export default Aside;
