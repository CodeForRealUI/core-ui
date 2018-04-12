import { take, call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import { push } from 'react-router-redux';
import swal from 'sweetalert2/dist/sweetalert2';
import {
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailure,
} from 'data/actions/login';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { DEFAULT_ERROR_MESSAGE } from '~/constants/errorMessages';
import LocalStorage, { KEYS } from '~/utilities/LocalStorage';

export function* authenticate(email, password) {
  try {
    const response = yield call(fetchResource, 'login', email, password);
    yield put(loginRequestSuccess(response));
    return response;
  } catch (error) {
    const errorMessage = get(error, 'data.errors.fullMessages[0]', DEFAULT_ERROR_MESSAGE);
    swal('Oops', errorMessage, 'error');
    yield put(loginRequestFailure(error));
    return false;
  }
}

export default function* loginFlow() {
  while (true) { // eslint-disable-line
    const { email, password } = yield take(LOGIN_REQUEST);
    const response = yield call(authenticate, email, password);

    if (response) {
      const token = get(response, 'headers.access-token');
      const client = get(response, 'headers.client');
      const { uid, role } = get(response, 'data.data');
      const localStorageItems = {
        [KEYS.TOKEN]: token,
        [KEYS.CLIENT]: client,
        [KEYS.UID]: uid,
      };
      LocalStorage.setAll(localStorageItems);
      const nextRoute = role ? '/dashboard' : 'verify-role';
      yield put(push(nextRoute));
    }
  }
}
