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
export const FAVORITE_PROJECT_REQUEST_SUCCESS = 'FAVORITE_PROJECT_REQUEST_SUCCESS';
export const favoriteProjectRequest = id => ({
  type: FAVORITE_PROJECT_REQUEST,
  id,
});
export const favoriteProjectRequestSuccess = id => ({
  type: FAVORITE_PROJECT_REQUEST_SUCCESS,
  id,
});

export const UNFAVORITE_PROJECT_REQUEST = 'UNFAVORITE_PROJECT_REQUEST';
export const UNFAVORITE_PROJECT_REQUEST_SUCCESS = 'UNFAVORITE_PROJECT_REQUEST_SUCCESS';
export const unfavoriteProjectRequest = id => ({
  type: UNFAVORITE_PROJECT_REQUEST,
  id,
});
export const unfavoriteProjectRequestSuccess = id => ({
  type: UNFAVORITE_PROJECT_REQUEST_SUCCESS,
  id,
});

export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';
export const clearProjects = () => ({ type: CLEAR_PROJECTS });

export const FAVORITE_IDS_REQUEST_SUCCESS = 'FAVORITE_IDS_REQUEST_SUCCESS';
export const favoriteIdsRequestSuccess = ids => ({ type: FAVORITE_IDS_REQUEST_SUCCESS, ids });
