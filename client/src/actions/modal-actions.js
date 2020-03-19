import { OPEN_MODAL, CLOSE_MODAL } from './index';

export const openModal = type => {
  return {
    type: OPEN_MODAL,
    payload: type
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
