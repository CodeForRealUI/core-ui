import { combineReducers } from 'redux';
import user, * as fromUser from './user';
import project, * as fromProject from './project';
import bootstrap, * as fromBootstrap from './bootstrap';
import routeReducer from './route';


export default function createReducer(injectedReducers) {
    // Combine reducers inside here.
  return combineReducers({
    user,
    project,
    bootstrap,
    routing: routeReducer,
    ...injectedReducers,
  });
}

// Global User Selectors
export const getUserData = state => fromUser.getUserData(state.user);
export const getFirstName = state => fromUser.getFirstName(state.user);
export const getId = state => fromUser.getId(state.user);
export const getIsMissingRole = state => fromUser.getIsMissingRole(state.user);

// Global Project Selectors
export const getProjects = state => fromProject.getProjects(state.project);
export const getIsProjectsLoading = state => fromProject.getIsLoading(state.project);

// Global Bootstrap Selectors
export const getIsBootstrapping = state => fromBootstrap.getIsBootstrapping(state.bootstrap);
