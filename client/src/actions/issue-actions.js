import axios from 'axios';
import {
  SUBMIT_ISSUE_FETCHING,
  SUBMIT_ISSUE_SUCCESS,
  SUBMIT_ISSUE_FAILURE
} from './index';
import { closeModal } from './modal-actions';

const setSubmitIssueFetching = () => {
  return {
    type: SUBMIT_ISSUE_FETCHING
  };
};

const setSubmitIssueSuccess = issue => {
  return {
    type: SUBMIT_ISSUE_SUCCESS,
    payload: issue
  };
};

const setSubmitIssueFailure = error => {
  return {
    type: SUBMIT_ISSUE_FAILURE,
    payload: error
  };
};

export const submitIssue = (project, data) => dispatch => {
  dispatch(setSubmitIssueFetching());
  axios
    .post(`/api/project/${project}/issue/create`, data)
    .then(res => {
      // dispatch(closeModal());
      dispatch(setSubmitIssueSuccess(res.data));
    })
    .catch(error => {
      dispatch(setSubmitIssueFailure(error.response.data));
    });
};
