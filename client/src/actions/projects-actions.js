import axios from 'axios';
import {
  GET_PROJECTS_FETCHING,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE
} from './index';

const getProjectsFetching = () => {
  return {
    type: GET_PROJECTS_FETCHING
  };
};

const getProjectsSuccess = projects => {
  return {
    type: GET_PROJECTS_SUCCESS,
    payload: projects
  };
};

const getProjectsFailure = error => {
  return {
    type: GET_PROJECTS_FAILURE,
    payload: error
  };
};

export const getProjects = () => dispatch => {
  dispatch(getProjectsFetching());
  axios
    .get('/api/project')
    .then(res => {
      dispatch(getProjectsSuccess(res.data));
    })
    .catch(error => {
      dispatch(getProjectsFailure(error.response.data));
    });
};
