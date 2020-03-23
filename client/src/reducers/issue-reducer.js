import {
  SUBMIT_ISSUE_FETCHING,
  SUBMIT_ISSUE_SUCCESS,
  SUBMIT_ISSUE_FAILURE
} from '../actions/index';

const initialState = {
  fetching: false,
  data: {}
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ISSUE_FETCHING: {
      state = { fetching: true, ...state };
      return state;
    }
    case SUBMIT_ISSUE_SUCCESS: {
      state = { ...state, ...action.payload, fetching: false };
      return state;
    }
    case SUBMIT_ISSUE_FAILURE: {
      state = { ...state, ...action.payload, fetching: false };
      return state;
    }
    default: {
      return state;
    }
  }
};

export default issueReducer;
