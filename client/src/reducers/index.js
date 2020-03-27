import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import authReducer from './auth-reducer';
import { modalReducer, secondaryModalReducer } from './modal-reducer';
import currentProjectReducer from './current-project-reducer';
import teamReducer from './team-reducer';
import issueReducer from './issue-reducer';

const rootReducer = combineReducers({
  userProjects: projectsReducer,
  currentProject: currentProjectReducer,
  currentUser: authReducer,
  modal: modalReducer,
  secondaryModal: secondaryModalReducer,
  team: teamReducer,
  issues: issueReducer
});

export default rootReducer;
