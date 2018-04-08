import ApiService from '~/services';
import { call } from 'redux-saga/effects';

function* fetchResource(resource, ...args) {
  try {
    const service = new ApiService();
    const response = yield call([service, resource], ...args);
    return response;
  } catch (e) {
    throw e;
  }
}

export default fetchResource;
