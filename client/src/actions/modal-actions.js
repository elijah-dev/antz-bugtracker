import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_SECONDARY_MODAL,
  CLOSE_SECONDARY_MODAL
} from './index';

export const openModal = payload => {
  return {
    type: OPEN_MODAL,
    payload: payload
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openSecondaryModal = payload => {
  return {
    type: OPEN_SECONDARY_MODAL,
    payload: payload
  };
};

export const closeSecondaryModal = () => {
  return {
    type: CLOSE_SECONDARY_MODAL
  };
};
