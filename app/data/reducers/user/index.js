import { combineReducers } from 'redux';
import { get } from 'lodash';
import { LOGIN_REQUEST_SUCCESS } from 'data/actions/login';
import { ROLE_PICK_REQUEST } from 'data/actions/rolePicker';
import { SIGNUP_REQUEST_SUCCESS } from 'data/actions/signup';

function data(state = {}, { type, response }) {
  switch (type) {
    case LOGIN_REQUEST_SUCCESS:
    case ROLE_PICK_REQUEST:
    case SIGNUP_REQUEST_SUCCESS:
      return get(response, 'data.data');
    default:
      return state;
  }
}

export default combineReducers({
  data,
});

/* eslint-disable dot-notation */
export const getFirstName = state => state['first_name'];
