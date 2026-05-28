import { useModalContext } from "../contexts/ModalContext";
import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";

export default function ModalRenderer() {
  const { activeModal } = useModalContext();
  switch (activeModal) {
    case "detail":
      return <RestaurantDetailModal />;
    case "add":
      return <AddRestaurantModal />;
    default:
      return null;
  }
}
