import { expectSaga } from 'redux-saga-test-plan';
import fetchResource from '~/data/sagas/helpers/fetchResource';
import { favoriteIdsRequestSuccess } from '~/data/actions/project';
import loadFavoriteProjectIds from './';

describe('loadFavoriteProjectIds saga', () => {
  const response = { data: { data: { ids: [] } } };
  it('should yield the expected effects', () => {
    expectSaga(loadFavoriteProjectIds)
      .provide({
        call({ fn, args }) {
          return fn === fetchResource && args[0] === 'getFavoriteProjectIds'
            ? response
            : null;
        },
      })
      .put(favoriteIdsRequestSuccess(response.data.data))
      .run();
  });
});
