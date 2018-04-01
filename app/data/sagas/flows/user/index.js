import { put, takeEvery, call } from 'redux-saga/effects';
import { USER_REQUEST, userRequestSuccess, userRequestFailure } from 'data/actions/user';
import ApiService from 'services';
import { get } from 'lodash';
import swal from 'sweetalert2/dist/sweetalert2';

export function* userRequestFlow() {
  try {
    const service = new ApiService();
    const response = yield call([service, 'getUserObject']);
    yield put(userRequestSuccess(response));
  } catch (exception) {
    const errorMessage = get(exception, 'data.errors.full_messages[0]', 'Something went wrong');
    swal('Oops', errorMessage, 'error');
    yield put(userRequestFailure(exception));
  }
}
export default function* () {
  yield [
    takeEvery(USER_REQUEST, userRequestFlow),
  ];
}
