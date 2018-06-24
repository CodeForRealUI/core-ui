import {
  BOOTSTRAP_SUCCESS,
  BOOTSTRAP_FAILURE,
  ROLE_PICK_BOOTSTRAP_REQUEST,
  ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST,
} from '~/data/actions/bootstrap';
import reducer, * as fromBootstrap from '../';

describe('Bootstrap reducer', () => {
  let initialState = {};
  describe('isBootstrapping reducer', () => {
    it('should return false as default', () => {
      initialState = {};
      const action = { type: 'RANDO' };
      const newState = reducer(initialState, action);
      expect(fromBootstrap.getIsBootstrapping(newState)).toEqual(false);
    });
    it('should return previous state if no type match', () => {
      initialState = {
        isBootstrapping: true,
      };
      const action = { type: 'RANDO' };
      const newState = reducer(initialState, action);
      expect(fromBootstrap.getIsBootstrapping(newState)).toEqual(true);
    });
    it('should return false on BOOTSTRAP_SUCCESS', () => {
      initialState = {
        isBootstrapping: true,
      };
      const action = { type: BOOTSTRAP_SUCCESS };
      const newState = reducer(initialState, action);
      expect(fromBootstrap.getIsBootstrapping(newState)).toEqual(false);
    });
    it('should return false on BOOTSTRAP_FAILURE', () => {
      initialState = {
        isBootstrapping: true,
      };
      const action = { type: BOOTSTRAP_FAILURE };
      const newState = reducer(initialState, action);
      expect(fromBootstrap.getIsBootstrapping(newState)).toEqual(false);
    });
    it('should return true on ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST', () => {
      initialState = {
        isBootstrapping: false,
      };
      const action = { type: ALREADY_SIGNED_IN_BOOTSTRAP_REQUEST };
      const newState = reducer(initialState, action);
      expect(fromBootstrap.getIsBootstrapping(newState)).toEqual(true);
    });
    it('should return true on ROLE_PICK_BOOTSTRAP_REQUEST', () => {
      initialState = {
        isBootstrapping: false,
      };
      const action = { type: ROLE_PICK_BOOTSTRAP_REQUEST };
      const newState = reducer(initialState, action);
      expect(fromBootstrap.getIsBootstrapping(newState)).toEqual(true);
    });
  });
});
