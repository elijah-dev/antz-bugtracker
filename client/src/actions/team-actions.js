import axios from 'axios';
import {
  GET_TEAM_FETCHING,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAILURE,
  GET_TEAM_CANDIDATES_SUCCESS
} from './index';

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

const getTeamCandidatesSuccess = candidates => {
  return {
    type: GET_TEAM_SUCCESS,
    payload: candidates
  };
};

const getTeamFailure = error => {
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
      if (query === '?invite=true') {
        console.log('sdfsdfs');
        return dispatch(getTeamCandidatesSuccess(res.data));
      }
      dispatch(getTeamSuccess(res.data));
    })
    .catch(error => {
      dispatch(getTeamFailure(error.response.data));
    });
};
