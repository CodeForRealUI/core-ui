import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

function a(state = 'lol', action) {
  return state;
}

function b(state = 'wat', action) {
  return state;
}

function routeReducer(state = 'null', action) {
  switch (action.type) {
        /* istanbul ignore next */
    case LOCATION_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
    // Combine reducers inside here.
  return combineReducers({
    a,
    b,
    route: routeReducer,
    ...injectedReducers,
  });
}
