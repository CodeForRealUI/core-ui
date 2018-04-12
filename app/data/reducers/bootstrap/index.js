import { combineReducers } from 'redux';
import {
  BOOTSTRAP_SUCCESS,
  BOOTSTRAP_FAILURE,
  ROLE_PICK_BOOTSTRAP_REQUEST,
  ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST,
} from '~/data/actions/bootstrap';

function isBootstrapping(state = false, { type }) {
  switch (type) {
    case ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST:
    case ROLE_PICK_BOOTSTRAP_REQUEST:
      return true;
    case BOOTSTRAP_SUCCESS:
    case BOOTSTRAP_FAILURE:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  isBootstrapping,
});

export const getIsBootstrapping = state => state.isBootstrapping;
