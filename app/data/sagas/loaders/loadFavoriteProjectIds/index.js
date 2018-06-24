import fetchResource from '~/data/sagas/helpers/fetchResource';
import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import { favoriteIdsRequestSuccess } from '~/data/actions//project';

export default function* loadFavoriteProjectIds() {
  const response = yield call(fetchResource, 'getFavoriteProjectIds');
  const ids = get(response, 'data.data');
  yield put(favoriteIdsRequestSuccess(ids));
}
