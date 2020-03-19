import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import authReducer from './auth-reducer';
import modalReducer from './modal-reducer';
import currentProjectReducer from './current-project-reducer';

const rootReducer = combineReducers({
  userProjects: projectsReducer,
  currentProject: currentProjectReducer,
  currentUser: authReducer,
  modal: modalReducer
});

export default rootReducer;
