

export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export const USER_REQUEST_FAILURE = 'USER_REQUEST_FAILURE';

export const userRequest = () => ({ type: USER_REQUEST });
export const userRequestSuccess = (response) => ({ type: USER_REQUEST_SUCCESS, response });
export const userRequestFailure = (error) => ({ type: USER_REQUEST_FAILURE, error });
