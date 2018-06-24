import { put, takeEvery, call, throttle } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  PASSWORD_RESET_EMAIL_REQUEST,
  passwordResetEmailRequestSuccess,
  passwordResetEmailRequestFailure,
  PASSWORD_RESET_REQUEST,
  passwordResetRequestSuccess,
  passwordResetRequestFailure,
} from 'data/actions/forgotPassword';

import { getJsonFromUrl } from '~/utilities/browser';
import { DEFAULT_ERROR_MESSAGE } from '~/constants/errorMessages';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';
import ApiService from '~/services';

export function* passwordResetEmailRequest({ email }) {
  try {
    const response = yield call(fetchResource, 'passwordResetEmail', email);
    yield put(passwordResetEmailRequestSuccess(response));
    swal('Success', 'An email has been sent to reset your password', 'success');
    yield put(push('/sign-in'));
  } catch (exception) {
    const errorMessage = get(
      exception,
      'data.errors.fullMessages[0]',
      DEFAULT_ERROR_MESSAGE,
    );
    swal('Oops', errorMessage, 'error');
    yield put(passwordResetEmailRequestFailure(exception));
  }
}

export function* passwordReset({ password, confirmedPassword }) {
  try {
    const params = getJsonFromUrl();
    const { client_id, uid } = params;
    const accessToken = params['access-token'];
    const queryParams = {
      'access-token': accessToken,
      client: client_id,
      uid,
    };
    const service = new ApiService(null, queryParams);
    const response = yield call([service, 'passwordReset'],
      password,
      confirmedPassword,
    );
    yield put(passwordResetRequestSuccess(response));
    swal('Success', 'Your password has been reset', 'success');
    yield put(push('/sign-in'));
  } catch (exception) {
    const errorMessage = get(
      exception,
      'data.errors.fullMessages[0]',
      DEFAULT_ERROR_MESSAGE,
    );
    swal('Oops', errorMessage, 'error');
    yield put(passwordResetRequestFailure(exception));
  }
}

export default function*() {
  yield [
    throttle(5000, PASSWORD_RESET_EMAIL_REQUEST, passwordResetEmailRequest),
    takeEvery(PASSWORD_RESET_REQUEST, passwordReset),
  ];
}
