import { atom } from "recoil";

export const restaurantItemState = atom({
  key: "restaurantItemState",
  default: {
    name: "",
    description: "",
  },
});
