import {
  GET_PROJECTS_FETCHING,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE
} from '../actions';

const initialState = {
  fetching: false,
  data: []
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_FETCHING: {
      state = { ...state, fetching: true };
      return state;
    }
    case GET_PROJECTS_SUCCESS: {
      state = { ...state, ...action.payload, fetching: false };
      return state;
    }
    case GET_PROJECTS_FAILURE: {
      state = { ...state, ...action.payload, fetching: false };
      return state;
    }
    default:
      return state;
  }
};

export default projectsReducer;
