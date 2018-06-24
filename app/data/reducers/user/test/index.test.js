import { LOGIN_REQUEST_SUCCESS } from '~/data/actions/login';
import { ROLE_PICK_REQUEST_SUCCESS } from '~/data/actions/rolePicker';
import { SIGNUP_REQUEST_SUCCESS } from '~/data/actions/signup';
import { USER_REQUEST_SUCCESS } from '~/data/actions/user';
import reducer, * as fromUser from '../';

describe('user reducers', () => {
  describe('data reducer', () => {
    const response = {
      data: {
        data: {
          test: 'test',
        },
      },
    };
    it('should return {} as default', () => {
      const initialState = {};
      const action = { type: 'RANDO' };
      const newState = reducer(initialState, action);
      expect(fromUser.getUserData(newState)).toEqual({});
    });
    it('should return previous state if no type match', () => {
      const initialState = {
        data: 'test',
      };
      const action = { type: 'RANDO' };
      const newState = reducer(initialState, action);
      expect(fromUser.getUserData(newState)).toEqual('test');
    });
    it('should return response.data.data on LOGIN_REQUEST_SUCCESS', () => {
      const initialState = {};
      const action = { type: LOGIN_REQUEST_SUCCESS, response };
      const newState = reducer(initialState, action);
      expect(fromUser.getUserData(newState)).toEqual(response.data.data);
    });
    it('should return response.data.data on ROLE_PICK_REQUEST_SUCCESS', () => {
      const initialState = {};
      const action = { type: ROLE_PICK_REQUEST_SUCCESS, response };
      const newState = reducer(initialState, action);
      expect(fromUser.getUserData(newState)).toEqual(response.data.data);
    });
    it('should return response.data.data on SIGNUP_REQUEST_SUCCESS', () => {
      const initialState = {};
      const action = { type: SIGNUP_REQUEST_SUCCESS, response };
      const newState = reducer(initialState, action);
      expect(fromUser.getUserData(newState)).toEqual(response.data.data);
    });
    it('should return response.data.data on USER_REQUEST_SUCCESS', () => {
      const initialState = {};
      const action = { type: USER_REQUEST_SUCCESS, response };
      const newState = reducer(initialState, action);
      expect(fromUser.getUserData(newState)).toEqual(response.data.data);
    });
  });

  describe('isMissingRole reducer', () => {
    const response = {
      data: {
        data: {
          role: 'non-profit',
        },
      },
    };
    it('should return true as default', () => {
      const initialState = {};
      const action = { type: 'RANDO' };
      const newState = reducer(initialState, action);
      expect(fromUser.getIsMissingRole(newState)).toEqual(false);
    });
    it('should return previous state if no type match', () => {
      const initialState = {
        isMissingRole: 'test',
      };
      const action = { type: 'RANDO' };
      const newState = reducer(initialState, action);
      expect(fromUser.getIsMissingRole(newState)).toEqual('test');
    });
    it('should return !response.data.data.role on USER_REQUEST_SUCCESS', () => {
      const initialState = {};
      const action = { type: USER_REQUEST_SUCCESS, response };
      const newState = reducer(initialState, action);
      expect(fromUser.getIsMissingRole(newState)).toEqual(!response.data.data.role);
    });
    it('should return false on ROLE_PICK_REQUEST_SUCCESS', () => {
      const initialState = {};
      const action = { type: ROLE_PICK_REQUEST_SUCCESS, response };
      const newState = reducer(initialState, action);
      expect(fromUser.getIsMissingRole(newState)).toEqual(false);
    });
  });
});
