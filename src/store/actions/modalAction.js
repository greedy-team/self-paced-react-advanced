import { SET_ADD_MODAL, SET_INFO_MODAL } from "./type";

export const setAddModal = (isOpen) => ({
  type: SET_ADD_MODAL,
  payload: isOpen
});

export const setInfoModal = (isOpen) => ({
  type: SET_INFO_MODAL,
  payload: isOpen
});