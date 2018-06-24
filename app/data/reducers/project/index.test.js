import {
  PROJECT_REQUEST_SUCCESS,
  PROJECT_REQUEST_FAILURE,
  PROJECT_REQUEST,
} from '~/data/actions/project';
import reducer, * as fromProject from './';

describe('Project reducer', () => {
  const initialState = {
    data: [],
    isLoading: false,
  };
  describe('data reducer', () => {
    it('should return the data property of the response when recieving PROJECT_REQUEST_SUCCESS', () => {
      const action = {
        type: PROJECT_REQUEST_SUCCESS,
        response: { data: { data: [{ test: 'test' }] } },
      };
      const state = reducer(initialState, action);
      expect(fromProject.getProjects(state)).toEqual(action.response.data.data);
    });
  });

  describe('isLoading reducer', () => {
    const previousState = { ...initialState, isLoading: true };
    it('should return true when recieving PROJECT_REQUEST', () => {
      const action = { type: PROJECT_REQUEST };
      const state = reducer(initialState, action);
      expect(fromProject.getIsLoading(state)).toBe(true);
    });

    it('should return false when recieving PROJECT_REQUEST_SUCCESS', () => {
      const action = { type: PROJECT_REQUEST_SUCCESS, response: {} };
      const state = reducer(previousState, action);
      expect(fromProject.getIsLoading(state)).toBe(false);
    });

    it('should return false when recieving PROJECT_REQUEST_FAILURE', () => {
      const action = { type: PROJECT_REQUEST_FAILURE, response: {} };
      const state = reducer(previousState, action);
      expect(fromProject.getIsLoading(state)).toBe(false);
    });
  });
});
