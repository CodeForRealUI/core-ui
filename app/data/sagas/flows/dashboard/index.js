import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import loadUser from '~/data/sagas/loaders/loadUser';
import loadProjects from '~/data/sagas/loaders/loadProjects';
import loadFavoriteProjectIds from '~/data/sagas/loaders/loadFavoriteProjectIds';
import loadProjectTypes from '~/data/sagas/loaders/loadProjectTypes';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import {
  BOOTSTRAP_DASHBOARD,
  dashboardBootstrapSuccess,
  dashboardBootstrapFailure,
} from '~/data/actions/dashboard';
import {
  PROJECT_REQUEST,
  FAVORITE_PROJECT_REQUEST,
  UNFAVORITE_PROJECT_REQUEST,
  favoriteProjectRequestSuccess,
  unfavoriteProjectRequestSuccess,
} from '~/data/actions/project';
import swal from 'sweetalert2/dist/sweetalert2';

export function* bootstrapDashboard() {
  try {
    yield all([
      call(loadUser),
      call(loadFavoriteProjectIds),
      call(loadProjectTypes),
    ]);
    yield put(dashboardBootstrapSuccess());
  } catch (exception) {
    yield put(dashboardBootstrapFailure(exception));
  }
}

export function* handleFavorite({ id }) {
  try {
    yield call(fetchResource, 'favoriteProject', id);
    yield put(favoriteProjectRequestSuccess(id));
  } catch (e) {
    swal('Unable to favorite project, please try again later.');
  }
}

export function* handleUnfavorite({ id }) {
  try {
    yield call(fetchResource, 'unfavoriteProject', id);
    yield put(unfavoriteProjectRequestSuccess(id));
  } catch (exception) {
    swal('Unable to unfavorite project, please try again later.');
  }
}

export default function*() {
  yield all([
    takeEvery(BOOTSTRAP_DASHBOARD, bootstrapDashboard),
    takeLatest(PROJECT_REQUEST, loadProjects),
    takeEvery(FAVORITE_PROJECT_REQUEST, handleFavorite),
    takeEvery(UNFAVORITE_PROJECT_REQUEST, handleUnfavorite),
  ]);
}
