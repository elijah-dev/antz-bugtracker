import axios from 'axios';

const getProjectsFetching = () => {
  return {
    type: 'GET_PROJECTS_FETCHING'
  };
};

const getProjectsSuccess = projects => {
  return {
    type: 'GET_PROJECTS_SUCCESS',
    payload: projects
  };
};

const getProjectsFailure = error => {
  return {
    type: 'GET_PROJECTS_FAILURE',
    payload: error
  };
};

export const getProjects = () => dispatch => {
  console.log('fetching');
  dispatch(getProjectsFetching());
  axios
    .get('/api/project')
    .then(res => {
      console.log(res);
      dispatch(getProjectsSuccess(res.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(getProjectsFailure('error'));
    });
};
