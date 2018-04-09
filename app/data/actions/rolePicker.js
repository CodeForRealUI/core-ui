export const ROLE_PICK_REQUEST = 'ROLE_PICK_REQUEST';
export const ROLE_PICK_REQUEST_SUCCESS = 'ROLE_PICK_REQUEST_SUCCESS';
export const ROLE_PICK_REQUEST_FAILURE = 'ROLE_PICK_REQUEST_FAILURE';

export const rolePickRequest = () => ({ type: ROLE_PICK_REQUEST });
export const rolePickRequestSuccess = (response) => ({ type: ROLE_PICK_REQUEST_SUCCESS, response });
export const rolePickRequestFailure = (error) => ({ type: ROLE_PICK_REQUEST_FAILURE, error });

export const BOOTSTRAP_ROLE_PICK = 'BOOTSTRAP_ROLE_PICK';
export const BOOTSTRAP_ROLE_PICK_SUCCESS = 'BOOTSTRAP_ROLE_PICK_SUCCESS';
export const BOOTSTRAP_ROLE_PICK_FAILURE = 'BOOTSTRAP_ROLE_PICK_FAILURE';

export const rolePickBootstrap = () => ({ type: BOOTSTRAP_ROLE_PICK });
export const rolePickBootstrapSuccess = () => ({ type: BOOTSTRAP_ROLE_PICK_SUCCESS });
export const rolePickBootstrapFailure = () => ({ type: BOOTSTRAP_ROLE_PICK_FAILURE });

