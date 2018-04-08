export const PROJECT_REQUEST = 'PROJECT_REQUEST';
export const PROJECT_REQUEST_SUCCESS = 'PROJECT_REQUEST_SUCCESS';
export const PROJECT_REQUEST_FAILURE = 'PROJECT_REQUEST_FAILURE';

export const projectRequest = () => ({ type: PROJECT_REQUEST });
export const projectRequestSuccess = response => ({
  type: PROJECT_REQUEST_SUCCESS,
  response,
});
export const projectRequestFailure = error => ({
  type: PROJECT_REQUEST_FAILURE,
  error,
});
