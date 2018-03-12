

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginRequestSuccess = response => ({ type: LOGIN_REQUEST_SUCCESS, response });
export const loginRequestFailure = error => ({ type: LOGIN_REQUEST_FAILURE, error });