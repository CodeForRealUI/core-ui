import { all } from 'redux-saga/effects';
import loginFlow from './flows/login';
import signupFlow from './flows/signup';
import resetPasswordFlow from './flows/resetPassword';
import signoutFlow from './flows/signout';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    signupFlow(),
    resetPasswordFlow(),
    signoutFlow(),
  ]);
}
