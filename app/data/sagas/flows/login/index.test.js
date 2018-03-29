/* eslint-disable */
import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, loginRequestSuccess, loginRequestFailure } from '~/data/actions/login';
import loginFlow, { authenticate } from './index';
import LocalStorage, { KEYS } from '../../../../utilities/LocalStorage';
import ApiService from 'services';
import sinon from 'sinon';

describe('Login flow', () => {
  const credentials = {
    email: 'test',
    password: 'test',
  };
  let gen,
    sandBox = sinon.sandbox.create();

  beforeEach(() => {
    gen = loginFlow();
    sandBox.restore();
  });

  it('should yield the expected effects when a response is NOT recieved', () => {
    expect(gen.next().value).toEqual(take(LOGIN_REQUEST));
    expect(gen.next(credentials).value).toEqual(
      call(authenticate, credentials.email, credentials.password),
    );
    expect(gen.next().value).toEqual(take(LOGIN_REQUEST));
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
    expect(gen.next().value).toEqual(take(LOGIN_REQUEST));
    expect(gen.next(credentials).value).toEqual(
      call(authenticate, credentials.email, credentials.password),
    );
    expect(gen.next(response).value).toEqual(put(push('/dashboard')));
    sinon.assert.callCount(stub, 1);
    sinon.assert.calledWith(stub, {
      [KEYS.TOKEN]: response.headers['access-token'],
      [KEYS.CLIENT]: response.headers.client,
      [KEYS.UID]: response.data.data.uid,
    });
  });

  describe('authenticate', () => {
    let authGenerator;

    beforeEach(() => {
      authGenerator = authenticate(credentials.email, credentials.password);
    });

    it('should yield the expected effects on happy path', () => {
      sandBox.stub(LocalStorage, 'getAll').returns([]);

      const stub = sandBox.stub(ApiService.prototype, 'login');
      // TODO: fix this hacky json stringify stuff
      expect(JSON.stringify(authGenerator.next().value)).toEqual(
        JSON.stringify(
          call(
            [new ApiService(), 'login'],
            credentials.email,
            credentials.password,
          ),
        ),
      );
      expect(authGenerator.next().value).toEqual(put(loginRequestSuccess()));
      expect(authGenerator.next().done).toBe(true);
    });

    it('should yield the expected effects on failure path', () => {
        const error = { test: 'test' };
        expect(authGenerator.next().value).toEqual(put(loginRequestFailure(error)));
    });
  });
});
