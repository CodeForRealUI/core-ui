import { combineReducers } from 'redux';
import { BOOTSTRAP, BOOTSTRAP_SUCCESS, BOOTSTRAP_FAILURE } from '~/data/actions/bootstrap';

function isBootstrapping(state = false, { type }) {
  switch (type) {
    case BOOTSTRAP:
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

