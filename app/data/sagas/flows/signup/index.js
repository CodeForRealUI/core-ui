import { put, takeEvery } from 'redux-saga/effects';
import ApiService from 'services';
import { SIGNUP_REQUEST, signupRequestSuccess, signupRequestFailure } from 'data/actions/signup';
import { push } from 'react-router-redux';


export function* signupFlow({ signupData }) {
  try {
      // TODO call signup
    yield put(signupRequestSuccess());
  } catch (exception) {
    yield put(signupRequestFailure(exception));
  }
}
export default function* () {
  yield [
    takeEvery(SIGNUP_REQUEST, signupFlow),
  ];
}
