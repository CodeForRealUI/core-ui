import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { projectTypesRequestSuccess } from '~/data/actions/project';

export default function* loadProjectTypes() {
  const response = yield call(fetchResource, 'getProjectTypes');
  const types = get(response, 'data.data');
  yield put(projectTypesRequestSuccess(types));
}
