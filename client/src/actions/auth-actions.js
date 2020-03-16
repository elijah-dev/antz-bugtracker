import axios from 'axios';
import { AUTH_FETCHING, AUTH_SUCCESS, AUTH_FAILURE } from './index';

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
  console.log('Fetching...');
  dispatch(authFetching());
  axios
    .get('/api/user', config)
    .then(res => {
      console.log('success');
      dispatch(authSuccess(res.data));
    })
    .catch(error => {
      console.log('failure');
      dispatch(authFailure(error.response.data));
    });
};

export const loginUser = credentials => dispatch => {
  console.log('Signing in...');
  dispatch(authFetching());
  axios
    .post('/api/auth/login', credentials)
    .then(res => {
      dispatch(authSuccess(res.data));
    })
    .catch(error => {
      dispatch(authFailure(error.response.data));
    });
};

export const logout = () => dispatch => {
  console.log('logging out');
  axios
    .post('/api/auth/logout')
    .then(res => {
      dispatch(authFailure(res.data));
    })
    .catch(error => {
      dispatch(authFailure(error.response.data));
    });
};
