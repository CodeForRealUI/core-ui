import { all, put } from 'redux-saga/effects';
import {
  bootstrapSuccess,
  bootstrapFailure,
} from '~/data/actions/bootstrap';

function* bootstrap(loaders) {
  try {
    yield all(loaders.map(loader => loader()));
    yield put(bootstrapSuccess());
  } catch (exception) {
    yield put(bootstrapFailure(exception));
  }
}

export default bootstrap;
