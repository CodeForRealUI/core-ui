import { LOCATION_CHANGE } from 'react-router-redux';


export default function routeReducer(state = 'null', action) {
  switch (action.type) {
            /* istanbul ignore next */
    case LOCATION_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
