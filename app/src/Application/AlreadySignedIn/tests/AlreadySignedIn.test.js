import React from 'react';
import { shallow } from 'enzyme';
import { AlreadySignedIn } from '../AlreadySignedIn';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('Component AlreadySignedIn', () => {
  const props = {
    handleSignoutRequest: () => {},
    isMissingRole: true,
    handleBootstrap: jest.fn(),
  };
  it('should dispatch the handleBootstrap when the component mounts', () => {
    expect(props.handleBootstrap.mock.calls.length).toBe(0);
    shallow(<AlreadySignedIn {...props} />);
    expect(props.handleBootstrap.mock.calls.length).toBe(1);
  });
});
