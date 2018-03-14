import { take, call, put } from 'redux-saga/effects';
import ApiService from 'services';
import { LOGIN_REQUEST, loginRequestSuccess, loginRequestFailure } from 'data/actions/login';
import { get } from 'lodash';
import { push } from 'react-router-redux';

function* authenticate(email, password) {
  try {
    const service = new ApiService();
    const response = yield call([service, 'login'], email, password);
    yield put(loginRequestSuccess(response));
    return response;
  } catch (error) {
    yield put(loginRequestFailure(error));
  }
}


export default function* loginFlow() {
  while (true) {
    const { email, password } = yield take(LOGIN_REQUEST);
    const response = yield call(authenticate, email, password);

    if (response) {
      const token = get(response, 'user.token');
      sessionStorage.setItem('c4r-auth-token', token);
      yield put(push('/dashboard'));
      yield take('LOGOUT');
      sessionStorage.clear();
    }
  }
}
