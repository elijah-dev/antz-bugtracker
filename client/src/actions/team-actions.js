import axios from 'axios';
import { GET_TEAM_FETCHING, GET_TEAM_SUCCESS, GET_TEAM_FAILURE } from './index';
import { openModal, closeSecondaryModal } from './modal-actions';

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

export const getTeam = project => dispatch => {
  dispatch(getTeamFetching());
  axios
    .get(`/api/project/${project}/team`)
    .then(res => {
      dispatch(getTeamSuccess(res.data));
    })
    .catch(error => {
      dispatch(getTeamFailure(error.response.data));
    });
};

export const manageTeam = (project, user, action) => dispatch => {
  dispatch(closeSecondaryModal());
  dispatch(openModal('loading'));
  dispatch(getTeamFetching());
  axios
    .put(`/api/project/${project}/team?user=${user}&action=${action}`)
    .then(res => {
      dispatch(getTeam(project));
    })
    .catch(error => {
      dispatch(getTeamSuccess(error.response.data));
    });
};
