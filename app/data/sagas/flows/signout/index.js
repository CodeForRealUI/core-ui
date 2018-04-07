import { put, takeEvery, call } from 'redux-saga/effects';
import { SIGNOUT_REQUEST, signoutRequestSuccess, signoutRequestFailure } from 'data/actions/signout';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { push } from 'react-router-redux';

import LocalStorage, { KEYS } from '~/utilities/LocalStorage';

export function* signoutFlow() {
  try {
    const response = yield call(fetchResource, 'signout');
    LocalStorage.remove(KEYS.TOKEN);
    yield put(push('/sign-in'));
    yield put(signoutRequestSuccess(response));
  } catch (exception) {
    LocalStorage.remove(KEYS.TOKEN);
    yield put(push('/sign-in'));
    yield put(signoutRequestFailure(exception));
  }
}
export default function* () {
  yield [
    takeEvery(SIGNOUT_REQUEST, signoutFlow),
  ];
}
