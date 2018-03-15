

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS';
export const SIGNUP_REQUEST_FAILURE = 'SIGNUP_REQUEST_FAILURE';

export const signupRequest = (signupData) => ({ type: SIGNUP_REQUEST, signupData });
export const signupRequestSuccess = (response) => ({ type: SIGNUP_REQUEST_SUCCESS, response });
export const signupRequestFailure = (error) => ({ type: SIGNUP_REQUEST_FAILURE, error });
