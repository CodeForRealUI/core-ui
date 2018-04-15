export const PROJECT_REQUEST = 'PROJECT_REQUEST';
export const PROJECT_REQUEST_SUCCESS = 'PROJECT_REQUEST_SUCCESS';
export const PROJECT_REQUEST_FAILURE = 'PROJECT_REQUEST_FAILURE';
export const projectRequest = (filter, page, perPage) => ({
  type: PROJECT_REQUEST,
  filter,
  page,
  perPage,
});
export const projectRequestSuccess = response => ({
  type: PROJECT_REQUEST_SUCCESS,
  response,
});
export const projectRequestFailure = error => ({
  type: PROJECT_REQUEST_FAILURE,
  error,
});

export const FAVORITE_PROJECT_REQUEST = 'FAVORITE_PROJECT_REQUEST';
export const favoriteProjectRequest = id => ({
  type: FAVORITE_PROJECT_REQUEST,
  id,
});

export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';
export const clearProjects = () => ({ type: CLEAR_PROJECTS });
