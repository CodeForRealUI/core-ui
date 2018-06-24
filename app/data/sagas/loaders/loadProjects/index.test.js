import { expectSaga } from 'redux-saga-test-plan';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { projectRequestSuccess, clearProjects } from '~/data/actions/project';
import { ALL } from '~/constants/projectFilters';
import loadProjects from './';

describe('loadProjects saga', () => {
  const response = {};
  const error = { test: 'test' };
  const options = { filter: ALL, page: 1, perPage: 25 };
  it('should yield the expected effects on happy path', () =>
    expectSaga(loadProjects, options)
      .put(clearProjects())
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
    expectSaga(loadProjects, options)
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
