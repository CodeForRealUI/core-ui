import { put, takeEvery, call } from 'redux-saga/effects';
import { SIGNUP_REQUEST, signupRequestSuccess, signupRequestFailure } from 'data/actions/signup';
import ApiService from 'services';

export function* signupFlow({ signupData }) {
  try {
    const service = new ApiService('https://damp-beyond-45634.herokuapp.com');
    const response = yield call([service, 'signup'], signupData);
    yield put(signupRequestSuccess(response));
  } catch (exception) {
    yield put(signupRequestFailure(exception));
  }
}
export default function* () {
  yield [
    takeEvery(SIGNUP_REQUEST, signupFlow),
  ];
}
