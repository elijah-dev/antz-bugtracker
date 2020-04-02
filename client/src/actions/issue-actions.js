import axios from 'axios';
import {
  GET_ISSUES_FETCHING,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAILURE
} from './index';
import {
  closeModal,
  openSecondaryModal,
  closeSecondaryModal
} from './modal-actions';

const getIssuesFetching = () => {
  return {
    type: GET_ISSUES_FETCHING
  };
};

const getIssuesSuccess = issue => {
  return {
    type: GET_ISSUES_SUCCESS,
    payload: issue
  };
};

export const getIssuesFailure = error => {
  return {
    type: GET_ISSUES_FAILURE,
    payload: error
  };
};

export const getIssues = (project, query) => dispatch => {
  dispatch(getIssuesFetching());
  axios
    .get(`/api/project/${project}/issue/${query}`)
    .then(res => {
      dispatch(getIssuesSuccess(res.data));
    })
    .catch(error => {
      dispatch(getIssuesFailure(error.response.data));
    });
};

export const submitIssue = (project, data) => dispatch => {
  dispatch(getIssuesFetching());
  axios
    .post(`/api/project/${project}/issue/create`, data)
    .then(res => {
      dispatch(closeSecondaryModal());
      dispatch(closeModal());
      dispatch(getIssues(project, ''));
    })
    .catch(error => {
      dispatch(getIssuesFailure(error.response.data));
    });
};

export const updateIssue = (issue, project, data) => dispatch => {
  dispatch(openSecondaryModal({ type: 'loading' }));
  dispatch(getIssuesFetching());
  axios
    .put(`/api/issue/${issue}`, data)
    .then(res => {
      dispatch(closeSecondaryModal());
      dispatch(closeModal());
      dispatch(getIssues(project, ''));
    })
    .catch(error => {
      dispatch(getIssuesFailure(error.response.data));
    });
};
