import axios from 'axios';
import { AUTH_FETCHING, AUTH_SUCCESS, AUTH_FAILURE } from './index';
import { setCurrentProjectFailure } from './project-actions';
import { getProjectsFailure } from './projects-actions';
import { closeModal } from './modal-actions';

const authFetching = () => {
  return {
    type: AUTH_FETCHING
  };
};

const authSuccess = user => {
  return {
    type: AUTH_SUCCESS,
    payload: user
  };
};

const authFailure = error => {
  return {
    type: AUTH_FAILURE,
    payload: error
  };
};

export const getCurrentUser = () => dispatch => {
  const config = {
    withCredentials: true
  };
  dispatch(authFetching());
  axios
    .get('/api/user', config)
    .then(res => {
      dispatch(authSuccess(res.data));
    })
    .catch(error => {
      dispatch(authFailure(error.response.data));
    });
};

export const signIn = credentials => dispatch => {
  dispatch(authFetching());
  axios
    .post('/api/auth/login', credentials)
    .then(res => {
      dispatch(closeModal());
      dispatch(authSuccess(res.data));
    })
    .catch(error => {
      dispatch(authFailure(error.response.data));
    });
};

export const signUp = data => dispatch => {
  dispatch(authFetching());
  axios
    .post('/api/auth/register', data)
    .then(res => {
      dispatch(closeModal());
      dispatch(authSuccess(res.data));
    })
    .catch(error => {
      dispatch(authFailure(error.response.data));
    });
};

export const logout = () => dispatch => {
  axios
    .post('/api/auth/logout')
    .then(res => {
      dispatch(setCurrentProjectFailure());
      dispatch(getProjectsFailure());
      dispatch(authFailure(res.data));
    })
    .catch(error => {
      dispatch(authFailure(error.response.data));
    });
};
