import { call, put } from 'redux-saga/effects';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import {
  projectRequestSuccess,
  projectRequestFailure,
} from '~/data/actions/project';

export default function* loadProjects() {
  try {
    const response = yield call(fetchResource, 'getProjects');
    yield put(projectRequestSuccess(response));
  } catch (exception) {
    yield put(projectRequestFailure(exception));
  }
}
