import { AUTH_FETCHING, AUTH_SUCCESS, AUTH_FAILURE } from '../actions';

const initialState = {
  fetching: false,
  isAuthorized: false,
  data: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FETCHING: {
      state = { ...state, fetching: true, isAuthorized: false };
      return state;
    }
    case AUTH_SUCCESS: {
      state = {
        ...state,
        ...action.payload,
        fetching: false,
        isAuthorized: true
      };
      return state;
    }
    case AUTH_FAILURE: {
      state = {};
      state = {
        data: {},
        ...action.payload,
        fetching: false,
        isAuthorized: false
      };
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
