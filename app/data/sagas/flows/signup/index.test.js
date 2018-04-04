import { expectSaga } from 'redux-saga-test-plan';
import { push } from 'react-router-redux';
import sinon from 'sinon';
import LocalStorage, { KEYS } from '~/utilities/LocalStorage';
import {
  signupRequestSuccess,
  signupRequestFailure,
} from '~/data/actions/signup';
import fetchResource from '~/data/sagas/common/fetchResource';
import { signupFlow } from './';


describe('Signup flow', () => {
  const data = { signupData: 'test' };
  const response = { headers: { 'access-token': 'test' }, data: { data: {} } };
  const sandBox = sinon.sandbox.create();
  const error = { test: 'test' };

  beforeEach(() => {
    sandBox.stub(LocalStorage, 'getAll').returns([]);
  });

  afterEach(() => {
    sandBox.restore();
  });

  it('should yield the expected actions on success path', () => {
    const stub = sandBox.stub(LocalStorage, 'set');
    expectSaga(signupFlow, data)
      .provide({
        call({ fn, args }, next) {
          if (
            fn === fetchResource &&
            args[1] === data.signupData
          ) {
            return response;
          }
          return next();
        },
      })
      .put(push('/verify-role'))
      .put(signupRequestSuccess(response))
      .run();
    sinon.assert.calledWith(stub, KEYS.TOKEN, response.headers['access-token']);
  });

  it('should yield the expected actions on error path', () =>
    expectSaga(signupFlow, data)
      .provide({
        call({ fn }) {
          if (fn === fetchResource) {
            throw error;
          }
        },
      })
      .put(signupRequestFailure(error))
      .run()
  );
});
