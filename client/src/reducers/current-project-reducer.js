import {
  SET_CURRENT_PROJECT_FETCHING,
  SET_CURRENT_PROJECT_SUCCESS,
  SET_CURRENT_PROJECT_FAILURE
} from '../actions';

const initialState = {
  fetching: false,
  data: {},
  permissions: {}
};

const currentProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT_FETCHING: {
      state = { ...state, fetching: true };
      return state;
    }
    case SET_CURRENT_PROJECT_SUCCESS: {
      state = {};
      state = { ...action.payload, fetching: false };
      return state;
    }
    case SET_CURRENT_PROJECT_FAILURE: {
      state = { data: {}, permissions: {}, ...action.payload, fetching: false };
      return state;
    }
    default:
      return state;
  }
};

export default currentProjectReducer;
