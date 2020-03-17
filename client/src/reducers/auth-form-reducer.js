import {
  FORM_OPEN_SIGNIN,
  FORM_OPEN_SIGNUP,
  FORM_CLOSE
} from '../actions/index';

const initialState = {
  isOpen: false,
  signup: false
};

const authFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_OPEN_SIGNIN: {
      state = { ...state, isOpen: true };
      return state;
    }
    case FORM_OPEN_SIGNUP: {
      state = { ...state, isOpen: true, signup: true };
      return state;
    }
    case FORM_CLOSE: {
      state = { ...state, isOpen: false, signup: false };
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authFormReducer;
