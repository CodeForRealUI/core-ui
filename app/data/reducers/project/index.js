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
      return get(response, 'data', []);
    default:
      return state;
  }
}

function isLoading(state = false, { type }) {
  switch (type) {
    case PROJECT_REQUEST_SUCCESS:
      return false;
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

export default combineReducers({
  data,
  isLoading,
});
