import {
  GET_TEAM_FETCHING,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAILURE
} from '../actions';

const initialState = {
  fetching: false,
  data: [],
  candidates: []
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM_FETCHING: {
      state = { ...state, candidates: [], fetching: true };
      return state;
    }
    case GET_TEAM_SUCCESS: {
      state = { ...state, ...action.payload, fetching: false };
      return state;
    }
    case GET_TEAM_FAILURE: {
      state = { data: [], candidates: [], ...action.payload, fetching: false };
      return state;
    }
    default:
      return state;
  }
};

export default teamReducer;
