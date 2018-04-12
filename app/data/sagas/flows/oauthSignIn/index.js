import { put, takeEvery, call, select } from 'redux-saga/effects';
import {
  OAUTH_LOGIN_REQUEST,
  oauthLoginRequestSuccess,
  oauthLoginRequestFailure,
} from '~/data/actions/login';
import { push } from 'react-router-redux';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';

import { getIsMissingRole } from '~/data/reducers';
import LocalStorage, { KEYS } from '~/utilities/LocalStorage';
import { getJsonFromUrl } from '~/utilities/browser';
import loadUser from '../../loaders/loadUser';

export function* oauthFlow() {
  try {
    const { auth_token, client_id, uid } = getJsonFromUrl();
    const localStorageItems = {
      [KEYS.TOKEN]: auth_token,
      [KEYS.CLIENT]: client_id,
      [KEYS.UID]: uid,
    };
    LocalStorage.setAll(localStorageItems);
    yield call(loadUser);
    const isMissingRole = yield select(getIsMissingRole);
    yield put(oauthLoginRequestSuccess());
    const nextRoute = isMissingRole ? '/verify-role' : '/dashboard';
    yield put(push(nextRoute));
  } catch (exception) {
    const errorMessage = get(
      exception,
      'data.errors.fullMessages[0]',
      'Something went wrong',
    );
    swal('Oops', errorMessage, 'error');
    yield put(oauthLoginRequestFailure(exception));
  }
}
export default function*() {
  yield [takeEvery(OAUTH_LOGIN_REQUEST, oauthFlow)];
}
