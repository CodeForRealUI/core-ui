import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import loadUser from '~/data/sagas/loaders/loadUser';
import loadProjects from '~/data/sagas/loaders/loadProjects';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import {
  BOOTSTRAP_DASHBOARD,
  dashboardBootstrapSuccess,
  dashboardBootstrapFailure,
} from '~/data/actions/dashboard';
import {
  PROJECT_REQUEST,
  FAVORITE_PROJECT_REQUEST,
} from '~/data/actions/project';
import swal from 'sweetalert2/dist/sweetalert2';

export function* bootstrapDashboard() {
  try {
    yield all([call(loadUser)]);
    yield put(dashboardBootstrapSuccess());
  } catch (exception) {
    yield put(dashboardBootstrapFailure(exception));
  }
}

export function* handleFavorite({ id }) {
  try {
    yield call(fetchResource, 'favoriteProject', id);
  } catch (exception) {
    swal(get(exception, 'data.errors.fullMessages[0]'));
  }
}

export default function*() {
  yield all([
    takeEvery(BOOTSTRAP_DASHBOARD, bootstrapDashboard),
    takeLatest(PROJECT_REQUEST, loadProjects),
    takeEvery(FAVORITE_PROJECT_REQUEST, handleFavorite),
  ]);
}
