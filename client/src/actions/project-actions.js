import axios from 'axios';
import {
  SET_CURRENT_PROJECT_FETCHING,
  SET_CURRENT_PROJECT_SUCCESS,
  SET_CURRENT_PROJECT_FAILURE
} from './index';
import { closeModal } from './modal-actions';
import Cookies from 'js-cookie';

const setCurrentProjectFetching = () => {
  return {
    type: SET_CURRENT_PROJECT_FETCHING
  };
};

export const setCurrentProjectSuccess = project => {
  return {
    type: SET_CURRENT_PROJECT_SUCCESS,
    payload: project
  };
};

const setCurrentProjectFailure = error => {
  return {
    type: SET_CURRENT_PROJECT_FAILURE,
    payload: error
  };
};

export const setCurrentProject = id => dispatch => {
  dispatch(setCurrentProjectFetching());
  axios
    .get(`/api/project/${id}`)
    .then(res => {
      Cookies.set('project', id);
      dispatch(setCurrentProjectSuccess(res.data));
    })
    .catch(error => {
      dispatch(setCurrentProjectFailure(error.response.data));
    });
};

export const createNewProject = data => dispatch => {
  dispatch(setCurrentProjectFetching());
  axios
    .post('/api/project/create', data)
    .then(res => {
      dispatch(closeModal());
      Cookies.set('project', res.data._id);
      dispatch(setCurrentProjectSuccess(res.data));
    })
    .catch(error => {
      dispatch(setCurrentProjectFailure(error.response.data));
    });
};
