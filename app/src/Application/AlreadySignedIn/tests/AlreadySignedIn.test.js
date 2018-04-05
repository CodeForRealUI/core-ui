import React from 'react';
import renderer from 'react-test-renderer';

import { AlreadySignedIn } from '../AlreadySignedIn';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('Component AlreadySignedIn', () => {
  const props = {
    handleSignoutRequest: () => {},
    isMissingRole: true,
  };
  it('should remain consistent if no change was intended', () => {
    const tree = renderer.create(<AlreadySignedIn {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
