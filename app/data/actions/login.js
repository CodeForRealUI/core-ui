export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginRequestSuccess = (response) => ({ type: LOGIN_REQUEST_SUCCESS, response });
export const loginRequestFailure = (error) => ({ type: LOGIN_REQUEST_FAILURE, error });

// todo rename to oauth sign in and move to sign in action folder
export const OAUTH_LOGIN_REQUEST = 'OAUTH_LOGIN_REQUEST';
export const OAUTH_LOGIN_REQUEST_SUCCESS = 'OAUTH_LOGIN_REQUEST_SUCCESS';
export const OAUTH_LOGIN_REQUEST_FAILURE = 'OAUTH_LOGIN_REQUEST_FAILURE';

export const oauthLoginRequest = () => ({ type: OAUTH_LOGIN_REQUEST });
export const oauthLoginRequestSuccess = (response) => ({ type: OAUTH_LOGIN_REQUEST_SUCCESS, response });
export const oauthLoginRequestFailure = (error) => ({ type: OAUTH_LOGIN_REQUEST_FAILURE, error });
