import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";
import useModalStore from "../store/useModalStore";

export default function ModalRenderer() {
  const activeModal = useModalStore((state) => state.activeModal);
  switch (activeModal) {
    case "detail":
      return <RestaurantDetailModal />;
    case "add":
      return <AddRestaurantModal />;
    default:
      return null;
  }
}
