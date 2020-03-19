import { OPEN_MODAL, CLOSE_MODAL } from '../actions/index';

const initialState = {
  isOpen: false,
  type: 'loading'
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      state = { isOpen: true, type: action.payload };
      return state;
    }
    case CLOSE_MODAL: {
      state = { isOpen: false };
      return state;
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
