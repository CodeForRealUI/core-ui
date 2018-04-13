import { call, takeEvery } from 'redux-saga/effects';

import { ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST } from '~/data/actions/bootstrap';
import bootstrap from '../../helpers/bootstrap';
import loadUser from '../../loaders/loadUser';

function* init() {
  yield call(bootstrap, [loadUser]);
}

export default function*() {
  yield [takeEvery(ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST, init)];
}
