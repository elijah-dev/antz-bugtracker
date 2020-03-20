import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import authReducer from './auth-reducer';
import modalReducer from './modal-reducer';
import currentProjectReducer from './current-project-reducer';
import teamReducer from './team-reducer';

const rootReducer = combineReducers({
  userProjects: projectsReducer,
  currentProject: currentProjectReducer,
  currentUser: authReducer,
  modal: modalReducer,
  team: teamReducer
});

export default rootReducer;
