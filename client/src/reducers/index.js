import { combineReducers } from 'redux';
import projectsReducer from './projects-reducer';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  currentUser: authReducer
});

export default rootReducer;
