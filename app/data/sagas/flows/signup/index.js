import { put, takeEvery, call } from 'redux-saga/effects';
import { SIGNUP_REQUEST, signupRequestSuccess, signupRequestFailure } from 'data/actions/signup';
import ApiService from 'services';
import { push } from 'react-router-redux';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';

import LocalStorage, { KEYS } from '~/utilities/LocalStorage';

export function* signupFlow({ signupData }) {
  try {
    const service = new ApiService();
    const response = yield call([service, 'signup'], signupData);
    const token = get(response, 'headers.access-token');
    LocalStorage.set(KEYS.TOKEN, token);
    yield put(push('/verify-role'));
    yield put(signupRequestSuccess(response));
  } catch (exception) {
    const errorMessage = get(exception, 'data.errors.full_messages[0]', 'Something went wrong');
    swal('Oops', errorMessage, 'error');
    yield put(signupRequestFailure(exception));
  }
}
export default function* () {
  yield [
    takeEvery(SIGNUP_REQUEST, signupFlow),
  ];
}
