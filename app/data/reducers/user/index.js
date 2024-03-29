import { combineReducers } from 'redux';
import { get } from 'lodash';
import { LOGIN_REQUEST_SUCCESS } from '~/data/actions/login';
import { ROLE_PICK_REQUEST_SUCCESS } from '~/data/actions/rolePicker';
import { SIGNUP_REQUEST_SUCCESS } from '~/data/actions/signup';
import { USER_REQUEST_SUCCESS } from '~/data/actions/user';

function data(state = {}, { type, response }) {
  switch (type) {
    case LOGIN_REQUEST_SUCCESS:
    case ROLE_PICK_REQUEST_SUCCESS:
    case SIGNUP_REQUEST_SUCCESS:
    case USER_REQUEST_SUCCESS:
      return get(response, 'data.data');
    default:
      return state;
  }
}

// defaulting to false is more optimistic for reoccuring users
function isMissingRole(state = false, { type, response }) {
  switch (type) {
    case USER_REQUEST_SUCCESS:
      return !(get(response, 'data.data.role'));
    case ROLE_PICK_REQUEST_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  isMissingRole,
});

export const getUserData = state => state.data;
export const getFirstName = state => state.data.firstName;
export const getId = state => state.data.id;
export const getIsMissingRole = state => state.isMissingRole;

