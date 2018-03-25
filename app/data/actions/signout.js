

export const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST';
export const SIGNOUT_REQUEST_SUCCESS = 'SIGNOUT_REQUEST_SUCCESS';
export const SIGNOUT_REQUEST_FAILURE = 'SIGNOUT_REQUEST_FAILURE';

export const signoutRequest = () => ({ type: SIGNOUT_REQUEST });
export const signoutRequestSuccess = () => ({ type: SIGNOUT_REQUEST_SUCCESS });
export const signoutRequestFailure = () => ({ type: SIGNOUT_REQUEST_FAILURE });
