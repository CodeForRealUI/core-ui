import { take, call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import { push } from 'react-router-redux';
import swal from 'sweetalert2';

import ApiService from 'services';
import { LOGIN_REQUEST, loginRequestSuccess, loginRequestFailure } from 'data/actions/login';
import { DEFAULT_ERROR_MESSAGE } from '~/constants/errorMessages';

function* authenticate(email, password) {
  try {
    const service = new ApiService();
    const response = yield call([service, 'login'], email, password);
    yield put(loginRequestSuccess());
    return response;
  } catch (error) {
    const errorMessage = get(
      error,
      'data.errors[0]',
      DEFAULT_ERROR_MESSAGE,
    );
    swal('Oops', errorMessage, 'error');
    yield put(loginRequestFailure(error));
    return false;
  }
}


export default function* loginFlow() {
  while (true) {
    const { email, password } = yield take(LOGIN_REQUEST);
    const response = yield call(authenticate, email, password);

    if (response) {
      // todo use constants and a cach util
      const token = get(response, 'headers.access-token');
      const client = get(response, 'headers.client');
      const { uid } = get(response, 'data.data');
      localStorage.setItem('c4r-token', token);
      localStorage.setItem('c4r-client', client);
      localStorage.setItem('c4r-uid', uid);
      yield put(push('/dashboard'));
    }
  }
}
