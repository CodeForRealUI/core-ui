import { put, takeEvery } from 'redux-saga/effects';
import { OAUTH_BOOTSTRAP_REQUEST, oauthBootstrapRequestSuccess, oauthBootstrapRequestFailure } from 'data/actions/oauthBootstrap';
import { push } from 'react-router-redux';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';

import LocalStorage, { KEYS } from '~/utilities/LocalStorage';
import { getJsonFromUrl } from '~/utilities/browser';

export function* oauthFlow() {
  try {
    const { auth_token, client_id, uid } = getJsonFromUrl();
    const localStorageItems = {
      [KEYS.TOKEN]: auth_token,
      [KEYS.CLIENT]: client_id,
      [KEYS.UID]: uid,
    };
    LocalStorage.setAll(localStorageItems);
    yield put(oauthBootstrapRequestSuccess());
    // todo check if has role otherwise redirect to verifyRole
    yield put(push('/dashboard'));
  } catch (exception) {
    const errorMessage = get(exception, 'data.errors.fullMessages[0]', 'Something went wrong');
    swal('Oops', errorMessage, 'error');
    yield put(oauthBootstrapRequestFailure(exception));
  }
}
export default function* () {
  yield [
    takeEvery(OAUTH_BOOTSTRAP_REQUEST, oauthFlow),
  ];
}
