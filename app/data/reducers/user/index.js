import { combineReducers } from 'redux';
import { omit, get } from 'lodash';
import { LOGIN_REQUEST_SUCCESS } from 'data/actions/login';


function data(state = {}, { type, response }) {
    switch(type) {
        case LOGIN_REQUEST_SUCCESS:
            return omit(get(response, 'user'), ['token'])
        default:
            return state;
    }
}

export default combineReducers({
    data
});