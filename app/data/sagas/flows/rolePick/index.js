import { put, takeEvery, call, select, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  ROLE_PICK_REQUEST,
  rolePickRequestSuccess,
  rolePickRequestFailure,
} from '~/data/actions/rolePicker';

import {
  ROLE_PICK_BOOTSTRAP_REQUEST,
} from '~/data/actions/bootstrap';


import { DEFAULT_ERROR_MESSAGE } from '~/constants/errorMessages';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';
import { getId } from '~/data/reducers';

import bootstrap from '../../helpers/bootstrap';
import loadUser from '../../loaders/loadUser';

export function* rolePick({ payload }) {
  try {
    const id = yield select(getId);
    const response = yield call(fetchResource, 'rolePick', id, payload);
    swal('Success', 'Your account have been successfully verified', 'success');
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

function* init() {
  yield call(bootstrap, [loadUser]);
}

export default function*() {
  yield all([
    takeEvery(ROLE_PICK_REQUEST, rolePick),
    takeEvery(ROLE_PICK_BOOTSTRAP_REQUEST, init),
  ]);
}
