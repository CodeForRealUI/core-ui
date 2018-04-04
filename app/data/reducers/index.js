import { combineReducers } from 'redux';
import user, * as fromUser from './user';
import routeReducer from './route';


export default function createReducer(injectedReducers) {
    // Combine reducers inside here.
  return combineReducers({
    user,
    routing: routeReducer,
    ...injectedReducers,
  });
}


export const getFirstName = state => fromUser.getFirstName(state.user);
export const getId = state => fromUser.getId(state.user);
export const getifMissingRole = state => fromUser.getifMissingRole(state.user);
