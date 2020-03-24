import { OPEN_MODAL, CLOSE_MODAL } from '../actions/index';

const initialState = {
  isOpen: false,
  type: 'none'
};

const modalReducer = (state = initialState, action) => {
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

export default modalReducer;
