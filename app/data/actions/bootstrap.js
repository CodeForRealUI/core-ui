export const BOOTSTRAP = 'BOOTSTRAP';
export const BOOTSTRAP_SUCCESS = 'BOOTSTRAP_SUCCESS';
export const BOOTSTRAP_FAILURE = 'BOOTSTRAP_FAILURE';

export const bootstrap = loaders => ({ type: BOOTSTRAP, loaders });
export const bootstrapSuccess = () => ({ type: BOOTSTRAP_SUCCESS });
export const bootstrapFailure = () => ({ type: BOOTSTRAP_FAILURE });

