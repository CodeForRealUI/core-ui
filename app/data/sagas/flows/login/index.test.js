/* eslint-disable */
import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { identity } from 'lodash';
import {
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailure,
} from '~/data/actions/login';
import loginFlow, { authenticate } from './index';
import LocalStorage, { KEYS } from '../../../../utilities/LocalStorage';
import ApiService from 'services';
import sinon from 'sinon';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

describe('Login flow', () => {
  const credentials = {
    email: 'test',
    password: 'test',
  };
  let sandBox = sinon.sandbox.create();

  afterEach(() => {
    sandBox.restore();
  });

  it('should yield the expected effects when a response is NOT recieved', () => {
    return expectSaga(loginFlow)
      .call(authenticate, credentials.email, credentials.password)
      .dispatch({
        type: LOGIN_REQUEST,
        email: credentials.email,
        password: credentials.password,
      })
      .run();
  });

  it('should yield the expected effects when a response is recieved', () => {
    const response = {
      headers: {
        'access-token': 'test',
        client: 'test',
      },
      data: {
        data: {
          uid: 'test',
        },
      },
    };
    const stub = sandBox.stub(LocalStorage, 'setAll');

    testSaga(loginFlow)
      .next()
      .take(LOGIN_REQUEST)
      .next({ email: credentials.email, password: credentials.password })
      .call(authenticate, credentials.email, credentials.password)
      .next(response)
      .put(push('/dashboard'));

    sinon.assert.callCount(stub, 1);
    sinon.assert.calledWith(stub, {
      [KEYS.TOKEN]: response.headers['access-token'],
      [KEYS.CLIENT]: response.headers.client,
      [KEYS.UID]: response.data.data.uid,
    });
  });

  describe('authenticate', () => {
    beforeEach(() => {
      sandBox.stub(LocalStorage, 'getAll').returns([]);
    });

    afterEach(() => {
      sandBox.restore();
    });

    it('should yield the expected effects on happy path', () => {
      const stub = sandBox.stub(ApiService.prototype, 'login');
      const response = { test: 'test' };
      return expectSaga(authenticate, credentials.email, credentials.password)
        .provide({
          call(effect, next) {
            return [
              effect.fn === ApiService.prototype.login,
              effect.args[0] === credentials.email,
              effect.args[1] === credentials.password,
            ].every(identity)
              ? response
              : next();
          },
        })
        .returns(response)
        .run();
    });

    it('should yield the expected effects on failure path', () => {
      const error = { test: 'test' };
      return expectSaga(authenticate)
        .provide({
          call({ fn }) {
            if (fn === ApiService.prototype.login) {
              throw error;
            }
            return next();
          }
        })
        .put(loginRequestFailure(error))
        .returns(false)
        .run();
    });
  });
});
