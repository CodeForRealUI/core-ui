import { all } from 'redux-saga/effects';
import loginFlow from './flows/login';
import signupFlow from './flows/signup';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    signupFlow(),
  ]);
}
