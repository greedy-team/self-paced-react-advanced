import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: null, // detail, add, add-success, null
});
