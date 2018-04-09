// todo rename to oauth sign in and move to sign in action folder
export const OAUTH_BOOTSTRAP_REQUEST = 'OAUTH_BOOTSTRAP_REQUEST';
export const OAUTH_BOOTSTRAP_REQUEST_SUCCESS = 'OAUTH_BOOTSTRAP_REQUEST_SUCCESS';
export const OAUTH_BOOTSTRAP_REQUEST_FAILURE = 'OAUTH_BOOTSTRAP_REQUEST_FAILURE';

export const oauthBootstrapRequest = () => ({ type: OAUTH_BOOTSTRAP_REQUEST });
export const oauthBootstrapRequestSuccess = (response) => ({ type: OAUTH_BOOTSTRAP_REQUEST_SUCCESS, response });
export const oauthBootstrapRequestFailure = (error) => ({ type: OAUTH_BOOTSTRAP_REQUEST_FAILURE, error });
