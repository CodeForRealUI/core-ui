import sinon from 'sinon';
import { expectSaga } from 'redux-saga-test-plan';
import ApiService from '~/services';
import LocalStorage from '~/utilities/LocalStorage';
import fetchResource from './';

describe('fetchResource common saga', () => {
  let resource;
  let email;
  let password;
  let response;
  const sandBox = sinon.sandbox.create();

  beforeEach(() => {
    resource = 'login';
    email = 'fakeemail';
    password = 'password';
    response = { test: 'test' };
    sandBox.stub(LocalStorage, 'getAll').returns([]);
    sandBox.stub(ApiService.prototype, resource);
  });

  afterAll(() => {
    sandBox.restore();
  });

  it('should invoke the correct resource and yield the expected effects', () =>
    expectSaga(fetchResource, resource, email, password)
      .provide({
        call({ fn, args }, next) {
          return [
            fn === ApiService.prototype[resource],
            args[0] === email,
            args[1] === password,
          ].every(e => e)
            ? response
            : next();
        },
      })
      .returns(response)
      .run());
});
