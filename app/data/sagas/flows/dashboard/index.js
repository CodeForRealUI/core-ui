import { all, call, put, takeEvery } from 'redux-saga/effects';
import loadUser from '~/data/sagas/loaders/loadUser';
import loadProjects from '~/data/sagas/loaders/loadProjects';
import {
  BOOTSTRAP_DASHBOARD,
  dashboardBootstrapSuccess,
  dashboardBootstrapFailure,
} from '~/data/actions/dashboard';

export function* bootstrapDashboard() {
  try {
    yield all([call(loadUser), call(loadProjects)]);
    yield put(dashboardBootstrapSuccess());
  } catch (exception) {
    yield put(dashboardBootstrapFailure(exception));
  }
}

export default function*() {
  yield all([takeEvery(BOOTSTRAP_DASHBOARD, bootstrapDashboard)]);
}
