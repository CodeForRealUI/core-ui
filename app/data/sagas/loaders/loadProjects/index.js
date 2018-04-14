import { call, put } from 'redux-saga/effects';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import {
  projectRequestSuccess,
  projectRequestFailure,
} from '~/data/actions/project';
import { ALL, MY_PROJECTS, FAVORITED } from '~/constants/projectFilters';

const RESOURCES = {
  [ALL]: 'getProjects',
  [MY_PROJECTS]: 'getMyProjects',
  [FAVORITED]: 'getFavoriteProjects', // todo
};

export default function* loadProjects({ filter }) {
  try {
    const response = yield call(fetchResource, RESOURCES[filter]);
    yield put(projectRequestSuccess(response));
  } catch (exception) {
    yield put(projectRequestFailure(exception));
    throw exception;
  }
}
