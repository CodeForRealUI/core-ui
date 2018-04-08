import { expectSaga } from 'redux-saga-test-plan';
import loadUser from '~/data/sagas/loaders/loadUser';
import loadProjects from '~/data/sagas/loaders/loadProjects';
import { dashboardBootstrapSuccess, dashboardBootstrapFailure } from '~/data/actions//dashboard';
import { bootstrapDashboard } from './';


describe('bootstrapDashboard', () => {
  const error = { test: 'test' };
  it('should yield the expected effects on happy path', () =>
    expectSaga(bootstrapDashboard)
      .provide({
        call({ fn }) {
          // throw error unless the expected resources are loaded
          if (fn === loadUser || fn === loadProjects) {
            return true;
          }
          throw Error('test');
        },
      })
      .put(dashboardBootstrapSuccess())
      .run()
  );

  it('should yield the expected effect on error path', () =>
    expectSaga(bootstrapDashboard)
      .provide({
        call() {
          throw error;
        },
      })
      .put(dashboardBootstrapFailure(error))
      .run()
  );
});
