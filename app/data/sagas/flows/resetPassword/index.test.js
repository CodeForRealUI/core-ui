import { push } from 'react-router-redux';
import { expectSaga } from 'redux-saga-test-plan';
import sinon from 'sinon';
import { identity } from 'lodash';
import {
  passwordResetEmailRequestSuccess,
  passwordResetEmailRequestFailure,
  passwordResetRequestSuccess,
  passwordResetRequestFailure,
} from '~/data/actions/forgotPassword';
import LocalStorage from '~/utilities/LocalStorage';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import ApiService from '~/services';
import { passwordReset, passwordResetEmailRequest } from './';


describe('Reset password flow', () => {
  const sandBox = sinon.sandbox.create();
  const response = { test: 'test' };
  const error = { test: 'test' };
  sandBox.stub(LocalStorage, 'getAll').returns([]);

  describe('passwordResetEmailRequest', () => {
    const request = { email: 'test' };

    it('should yield the expected actions on success path', () =>
      expectSaga(passwordResetEmailRequest, request)
        .provide({
          call({ fn, args }, next) {
            return fn === fetchResource &&
              args[1] === request.email
              ? response
              : next();
          },
        })
        .put(passwordResetEmailRequestSuccess(response))
        .put(push('/sign-in'))
        .run()
    );

    it('should yield the expected actions on error path', () =>
      expectSaga(passwordResetEmailRequest, request)
        .provide({
          call({ fn, args }) {
            if (fn === fetchResource && args[0] === 'passwordResetEmail') {
              throw error;
            }
          },
        })
        .put(passwordResetEmailRequestFailure(error))
        .returns(undefined)
        .run()
    );
  });

  describe('passwordReset', () => {
    const request = { password: 'test', confirmedPassword: 'test' };

    it('should yield the expected actions on success path', () =>
      expectSaga(passwordReset, request)
        .provide({
          call({ fn, args }) {
            return (
              [
                fn === ApiService.prototype.passwordReset,
                args[0] === request.password,
                args[1] === request.confirmedPassword,
              ].every(identity) && response
            );
          },
        })
        .put(passwordResetRequestSuccess(response))
        .put(push('/sign-in'))
        .returns(undefined)
        .run()
    );

    it('should yield the expected actions on error path', () =>
      expectSaga(passwordReset, request)
        .provide({
          call({ fn }) {
            if (fn === ApiService.prototype.passwordReset) {
              throw error;
            }
          },
        })
        .put(passwordResetRequestFailure(error))
        .returns(undefined)
        .run()
    );
  });
});
