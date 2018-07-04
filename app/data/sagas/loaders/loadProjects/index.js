import { call, put } from 'redux-saga/effects';
import { omitBy, isEmpty } from 'lodash';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import {
  projectRequestSuccess,
  projectRequestFailure,
  clearProjects,
} from '~/data/actions/project';
import {
  ALL,
  MY_PROJECTS,
  FAVORITED,
  REQUESTED,
  FILTERED,
} from '~/constants/projectFilters';

const RESOURCES = {
  [ALL]: 'getProjects',
  [MY_PROJECTS]: 'getMyProjects',
  [FILTERED]: 'getFilteredProjects',
  [FAVORITED]: 'getFavoriteProjects', // todo
  [REQUESTED]: 'getRequestedProjects', // todo
};

export default function* loadProjects({ category, filters, page, perPage }) {
  try {
    if (page === 1) {
      yield put(clearProjects());
    }
    const response = yield call(fetchResource, RESOURCES[category], {
      filters: omitBy(filters, isEmpty),
      page,
      perPage,
    });
    yield put(projectRequestSuccess(response));
  } catch (exception) {
    yield put(projectRequestFailure(exception));
  }
}
