import { put, takeEvery, call } from 'redux-saga/effects';
import {
  PASSWORD_RESET_EMAIL_REQUEST,
  passwordResetEmailRequestSuccess,
  passwordResetEmailRequestFailure,
  PASSWORD_RESET_REQUEST,
  passwordResetRequestSuccess,
  passwordResetRequestFailure,
} from 'data/actions/forgotPassword';

import { DEFAULT_ERROR_MESSAGE } from '~/constants/errorMessages';
import ApiService from 'services';
import { get } from 'lodash';
import swal from 'sweetalert2';

export function* passwordResetEmailRequest({ email }) {
  try {
    const service = new ApiService();
    const response = yield call([service, 'passwordResetEmail'], email);
    yield put(passwordResetEmailRequestSuccess(response));
    swal('Success', 'An email has been sent to reset your password', 'success');
  } catch (exception) {
    const errorMessage = get(
      exception,
      'data.errors[0]',
      DEFAULT_ERROR_MESSAGE,
    );
    swal('Oops', errorMessage, 'error');
    yield put(passwordResetEmailRequestFailure(exception));
  }
}

export function* passwordReset({ password, confirmedPassword }) {
  try {
    const service = new ApiService();
    const response = yield call(
      [service, 'passwordReset'],
      password,
      confirmedPassword,
    );
    yield put(passwordResetRequestSuccess(response));
    swal('Success', 'Your password has been reset', 'success');
  } catch (exception) {
    const errorMessage = get(
      exception,
      'data.errors[0]',
      DEFAULT_ERROR_MESSAGE,
    );
    swal('Oops', errorMessage, 'error');
    yield put(passwordResetRequestFailure(exception));
  }
}

export default function* () {
  yield [
    takeEvery(PASSWORD_RESET_EMAIL_REQUEST, passwordResetEmailRequest),
    takeEvery(PASSWORD_RESET_REQUEST, passwordReset),
  ];
}
