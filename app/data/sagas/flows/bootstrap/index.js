import { all, put, takeEvery } from 'redux-saga/effects';
import {
  BOOTSTRAP,
  bootstrapSuccess,
  bootstrapFailure,
} from '~/data/actions/bootstrap';

export function* bootstrap({ loaders }) {
  try {
    yield all(loaders.map(loader => loader()));
    yield put(bootstrapSuccess());
  } catch (exception) {
    yield put(bootstrapFailure(exception));
  }
}

export default function*() {
  yield all([takeEvery(BOOTSTRAP, bootstrap)]);
}
