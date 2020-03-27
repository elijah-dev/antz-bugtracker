import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_SECONDARY_MODAL,
  CLOSE_SECONDARY_MODAL
} from '../actions/index';

const initialState = {
  isOpen: false,
  type: 'none'
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      state = { ...state, isOpen: true, ...action.payload };
      return state;
    }
    case CLOSE_MODAL: {
      state = { isOpen: false, type: 'none' };
      return state;
    }
    default: {
      return state;
    }
  }
};

const initialStateSecondary = {
  isOpen: false,
  type: 'none'
};

export const secondaryModalReducer = (
  state = initialStateSecondary,
  action
) => {
  switch (action.type) {
    case OPEN_SECONDARY_MODAL: {
      state = { ...state, isOpen: true, ...action.payload };
      return state;
    }
    case CLOSE_SECONDARY_MODAL: {
      state = { isOpen: false, type: 'none' };
      return state;
    }
    default: {
      return state;
    }
  }
};
