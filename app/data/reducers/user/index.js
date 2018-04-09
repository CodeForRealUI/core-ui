import { combineReducers } from 'redux';
import { get } from 'lodash';
import { LOGIN_REQUEST_SUCCESS } from '~/data/actions/login';
import { ROLE_PICK_REQUEST_SUCCESS, BOOTSTRAP_ROLE_PICK } from '~/data/actions/rolePicker';
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

function isMissingRole(state = true, { type, response }) {
  switch (type) {
    case USER_REQUEST_SUCCESS:
      return !(get(response, 'data.data.role'));
    case ROLE_PICK_REQUEST_SUCCESS:
      return false;
    default:
      return state;
  }
}

function isLoading(state = false, { type }) {
  switch (type) {
    case BOOTSTRAP_ROLE_PICK:
      return true;
    case USER_REQUEST_SUCCESS:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  isMissingRole,
  isLoading,
});

/* eslint-disable dot-notation */
export const getFirstName = state => state.data['firstName'];
export const getId = state => state.data.id;
export const getIsMissingRole = state => state.isMissingRole;
export const getIsLoading = state => state.isLoading;

