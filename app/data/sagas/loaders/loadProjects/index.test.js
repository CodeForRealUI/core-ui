import { expectSaga } from 'redux-saga-test-plan';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { projectRequestSuccess } from '~/data/actions/project';
import loadProjects from './';

describe('loadProjects saga', () => {
  const response = {};
  const error = { test: 'test' };
  it('should yield the expected effects on happy path', () =>
    expectSaga(loadProjects)
      .provide({
        call({ fn, args }) {
          if (fn === fetchResource && args[0] === 'getProjects') {
            return response;
          }
          return null;
        },
      })
      .put(projectRequestSuccess(response))
      .run());

  it('should yield the expected effects on error path', () =>
    expectSaga(loadProjects)
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
      }));
});
