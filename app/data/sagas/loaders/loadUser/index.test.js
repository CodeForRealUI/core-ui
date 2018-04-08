import { expectSaga } from 'redux-saga-test-plan';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { userRequestSuccess } from '~/data/actions/user';
import loadUser from './';

describe('loadUser saga', () => {
  const response = { test: 'test' };
  const error = { test: 'test' };

  it('should yield the expected effects on happy path', () =>
    expectSaga(loadUser)
      .provide({
        call({ fn }) {
          if (fn === fetchResource) {
            return response;
          }
          return null;
        },
      })
      .put(userRequestSuccess(response))
      .run()
  );

  it('should yield the expected effects on error path', () =>
    expectSaga(loadUser)
      .provide({
        call({ fn }) {
          if (fn === fetchResource) {
            throw error;
          }
        },
      })
      .run()
      .catch(err => {
        expect(err).toEqual(error);
      })
  );
});
