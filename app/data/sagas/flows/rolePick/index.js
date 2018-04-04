import { put, takeEvery, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
    ROLE_PICK_REQUEST,
    rolePickRequestSuccess,
    rolePickRequestFailure,
} from 'data/actions/rolePicker';

import { DEFAULT_ERROR_MESSAGE } from '~/constants/errorMessages';
import ApiService from 'services';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';
import { getId } from '~/data/reducers';

export function* rolePick({ payload }) {
  try {
    const id = yield select(getId);
    const service = new ApiService();
    const response = yield call(
      [service, 'rolePick'],
      id,
      payload
    );
    yield put(push('/dashboard'));
    yield put(rolePickRequestSuccess(response));
  } catch (exception) {
    const errorMessage = get(
      exception,
      'data.errors.full_messages[0]',
      DEFAULT_ERROR_MESSAGE,
    );
    swal('Oops', errorMessage, 'error');
    yield put(rolePickRequestFailure(exception));
  }
}

export default function*() {
  yield [
    takeEvery(ROLE_PICK_REQUEST, rolePick),
  ];
}
