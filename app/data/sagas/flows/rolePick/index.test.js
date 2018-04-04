import { expectSaga } from 'redux-saga-test-plan';
import { getId } from '~/data/reducers';
import fetchResource from '~/data/sagas/common/fetchResource';
import {
  rolePickRequestSuccess,
  rolePickRequestFailure,
} from '~/data/actions/rolePicker';
import { rolePick } from './';

describe('rolePick saga', () => {
  const payload = { payload: {} };
  const response = { test: 'test' };
  const error = { error: 'test' };
  const id = 'test';
  it('should yield the expected effects on happy path', () =>
    expectSaga(rolePick, payload)
      .provide({
        select({ selector }) {// eslint-disable-line
          if (selector === getId) {
            return id;
          }
        },
        call({ fn, args }) {// eslint-disable-line
          if (
            fn === fetchResource &&
            args[1] === id &&
            args[2] === payload.payload
          ) {
            return response;
          }
        },
      })
      .put(rolePickRequestSuccess(response))
      .run()
    );

  it('should yield the expected effects on the failure path', () =>
    expectSaga(rolePick, payload)
      .provide({
        select() {
          throw error;
        },
      })
      .put(rolePickRequestFailure(error))
      .run()
  );
});
