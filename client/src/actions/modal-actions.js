import { OPEN_MODAL, CLOSE_MODAL } from './index';

export const openModal = (type, button, close) => {
  return {
    type: OPEN_MODAL,
    payload: { type, button, close }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
