import {
  GET_ISSUES_FETCHING,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAILURE
} from '../actions/index';

const initialState = {
  fetching: false,
  data: []
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES_FETCHING: {
      state = { fetching: true, ...state };
      return state;
    }
    case GET_ISSUES_SUCCESS: {
      state = { ...state, ...action.payload, fetching: false };
      return state;
    }
    case GET_ISSUES_FAILURE: {
      state = { ...state, data: [], ...action.payload, fetching: false };
      return state;
    }
    default: {
      return state;
    }
  }
};

export default issueReducer;
