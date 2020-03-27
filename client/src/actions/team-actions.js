import axios from 'axios';
import { GET_TEAM_FETCHING, GET_TEAM_SUCCESS, GET_TEAM_FAILURE } from './index';
import { openModal } from './modal-actions';

const getTeamFetching = () => {
  return {
    type: GET_TEAM_FETCHING
  };
};

const getTeamSuccess = team => {
  return {
    type: GET_TEAM_SUCCESS,
    payload: team
  };
};

export const getTeamFailure = error => {
  return {
    type: GET_TEAM_FAILURE,
    payload: error
  };
};

export const getTeam = (project, query) => dispatch => {
  dispatch(getTeamFetching());
  axios
    .get(`/api/project/${project}/team${query}`)
    .then(res => {
      dispatch(getTeamSuccess(res.data));
    })
    .catch(error => {
      dispatch(getTeamFailure(error.response.data));
    });
};

export const manageTeam = (project, query) => dispatch => {
  dispatch(openModal('loading'));
  dispatch(getTeamFetching());
  axios
    .put(`/api/project/${project}/team${query}`)
    .then(res => {
      dispatch(openModal('team', 'invite', 'Close'));
    })
    .catch(error => {
      dispatch(getTeamSuccess(error.response.data));
    });
};
