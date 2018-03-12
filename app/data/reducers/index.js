import { combineReducers } from 'redux';
import user from './user';
import routeReducer from './route';



export default function createReducer(injectedReducers) {
    // Combine reducers inside here.
  return combineReducers({
    user,
    routing: routeReducer,
    ...injectedReducers,
  });
}
