export const BOOTSTRAP_SUCCESS = 'BOOTSTRAP_SUCCESS';
export const BOOTSTRAP_FAILURE = 'BOOTSTRAP_FAILURE';

export const ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST = 'ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST';
export const ROLE_PICK_BOOTSTRAP_REQUEST = 'ROLE_PICK_BOOTSTRAP_REQUEST';

export const bootstrapSuccess = () => ({ type: BOOTSTRAP_SUCCESS });
export const bootstrapFailure = () => ({ type: BOOTSTRAP_FAILURE });

export const alreadySignedInBootstrapRequest = () => ({ type: ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST });
export const rolePickBootstrapRequest = () => ({ type: ROLE_PICK_BOOTSTRAP_REQUEST });

