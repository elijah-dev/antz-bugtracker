import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import authReducer from './auth-reducer';
import authFormReducer from './auth-form-reducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  currentUser: authReducer,
  authForm: authFormReducer
});

export default rootReducer;
