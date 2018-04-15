import { combineReducers } from 'redux';
import { get } from 'lodash';
import {
  PROJECT_REQUEST_SUCCESS,
  PROJECT_REQUEST_FAILURE,
  PROJECT_REQUEST,
} from '~/data/actions/project';

function data(state = [], { type, response }) {
  switch (type) {
    case PROJECT_REQUEST_SUCCESS:
      return state.concat(get(response.data, 'data', []));
    case 'CLEAR_PROJECTS':
      return [];
    default:
      return state;
  }
}

function total(state = 0, { type, response }) {
  if (type === PROJECT_REQUEST_SUCCESS) {
    return parseInt(get(response, 'headers.total'), 10);
  }
  return state;
}

function isLoading(state = false, { type }) {
  switch (type) {
    case PROJECT_REQUEST_SUCCESS:
    case PROJECT_REQUEST_FAILURE:
      return false;
    case PROJECT_REQUEST:
      return true;
    default:
      return state;
  }
}

export const getProjects = state => state.data;
export const getIsLoading = state => state.isLoading;
export const getTotal = state => state.total;

export default combineReducers({
  data,
  isLoading,
  total,
});
