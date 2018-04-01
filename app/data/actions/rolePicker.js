export const ROLE_PICK_REQUEST = 'ROLE_PICK_REQUEST';
export const ROLE_PICK_REQUEST_SUCCESS = 'ROLE_PICK_REQUEST_SUCCESS';
export const ROLE_PICK_REQUEST_FAILURE = 'ROLE_PICK_REQUEST_FAILURE';

export const rolePickRequest = (payload) => ({ type: ROLE_PICK_REQUEST, payload });
export const rolePickRequestSuccess = (response) => ({ type: ROLE_PICK_REQUEST_SUCCESS, response });
export const rolePickRequestFailure = (error) => ({ type: ROLE_PICK_REQUEST_FAILURE, error });
