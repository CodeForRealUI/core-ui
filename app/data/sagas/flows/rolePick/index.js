import { put, takeEvery, call, select, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import loadUser from '~/data/sagas/loaders/loadUser';
import {
  ROLE_PICK_REQUEST,
  BOOTSTRAP_ROLE_PICK,
  rolePickRequestSuccess,
  rolePickRequestFailure,
  rolePickBootstrapSuccess,
  rolePickBootstrapFailure,
} from '~/data/actions/rolePicker';

import { DEFAULT_ERROR_MESSAGE } from '~/constants/errorMessages';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';
import { getId } from '~/data/reducers';

export function* rolePick({ payload }) {
  try {
    const id = yield select(getId);
    const response = yield call(fetchResource, 'rolePick', id, payload);
    yield put(push('/dashboard'));
    yield put(rolePickRequestSuccess(response));
  } catch (exception) {
    const errorMessage = get(
      exception,
      'data.errors.fullMessages[0]',
      DEFAULT_ERROR_MESSAGE,
    );
    swal('Oops', errorMessage, 'error');
    yield put(rolePickRequestFailure(exception));
  }
}

export default function*() {
  yield [takeEvery(ROLE_PICK_REQUEST, rolePick)];
}
