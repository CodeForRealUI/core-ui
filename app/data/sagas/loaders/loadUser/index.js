import { put, call } from 'redux-saga/effects';
import { userRequestSuccess, userRequestFailure } from '~/data/actions/user';
import fetchResource from '~/data/sagas/helpers/fetchResource';

export default function* loadUser() {
  try {
    const response = yield call(fetchResource, 'getUserObject');
    yield put(userRequestSuccess(response));
  } catch (exception) {
    yield put(userRequestFailure(exception));
  }
}

