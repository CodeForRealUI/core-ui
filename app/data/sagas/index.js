import { all } from 'redux-saga/effects';
import loginFlow from './flows/login';
import signupFlow from './flows/signup';
import resetPasswordFlow from './flows/resetPassword';
import signoutFlow from './flows/signout';
import rolePickFlow from './flows/rolePick';
import dashboardFlow from './flows/dashboard';
import oauthFlow from './flows/oauthSignIn';
import bootstrapFlow from './flows/bootstrap';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    signupFlow(),
    resetPasswordFlow(),
    signoutFlow(),
    rolePickFlow(),
    dashboardFlow(),
    oauthFlow(),
    bootstrapFlow(),
  ]);
}
