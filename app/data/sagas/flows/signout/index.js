import { put, takeEvery, call } from 'redux-saga/effects';
import { SIGNOUT_REQUEST, signoutRequestSuccess, signoutRequestFailure } from 'data/actions/signout';
import ApiService from 'services';
import { push } from 'react-router-redux';

import LocalStorage, { KEYS } from '~/utilities/LocalStorage';

export function* signoutFlow() {
  try {
    const service = new ApiService();
    const response = yield call([service, 'signout']);
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
