import { combineReducers } from 'redux';
import user, * as fromUser from './user';
import project, * as fromProject from './project';
import routeReducer from './route';


export default function createReducer(injectedReducers) {
    // Combine reducers inside here.
  return combineReducers({
    user,
    project,
    routing: routeReducer,
    ...injectedReducers,
  });
}

// Global User Selectors
export const getFirstName = state => fromUser.getFirstName(state.user);
export const getId = state => fromUser.getId(state.user);

// Global Project Selectors
export const getProjects = state => fromProject.getProjects(state.project);
export const getIsProjectsLoading = state => fromProject.getIsLoading(state.project);
