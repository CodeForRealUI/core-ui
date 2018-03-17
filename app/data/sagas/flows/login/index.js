import { take, call, put } from 'redux-saga/effects';
import ApiService from 'services';
import { LOGIN_REQUEST, loginRequestSuccess, loginRequestFailure } from 'data/actions/login';
import { get } from 'lodash';
import { push } from 'react-router-redux';

function* authenticate(email, password) {
  try {
    const service = new ApiService();
    const response = yield call([service, 'login'], email, password);
    yield put(loginRequestSuccess());
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
      const token = get(response, 'headers.access-token');
      localStorage.setItem('c4r-auth-token', token); // TODO, move the localStorage key to config
      yield put(push('/dashboard'));
      yield take('LOGOUT');
      localStorage.clear();
    }
  }
}
