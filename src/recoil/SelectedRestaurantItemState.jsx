import { atom } from "recoil";

export const selectedRestaurantItemState = atom({
  key: "restaurantItemState",
  default: {
    name: "",
    description: "",
  },
});
