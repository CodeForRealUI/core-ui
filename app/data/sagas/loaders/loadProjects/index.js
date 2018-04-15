import { call, put } from 'redux-saga/effects';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import {
  projectRequestSuccess,
  projectRequestFailure,
  clearProjects,
} from '~/data/actions/project';
import { ALL, MY_PROJECTS, FAVORITED } from '~/constants/projectFilters';

const RESOURCES = {
  [ALL]: 'getProjects',
  [MY_PROJECTS]: 'getMyProjects',
  [FAVORITED]: 'getFavoriteProjects', // todo
};

export default function* loadProjects({ filter, page, perPage }) {
  try {
    if (page === 1) {
      yield put(clearProjects());
    }
    const response = yield call(fetchResource, RESOURCES[filter], page, perPage);
    yield put(projectRequestSuccess(response));
  } catch (exception) {
    yield put(projectRequestFailure(exception));
    throw exception;
  }
}
