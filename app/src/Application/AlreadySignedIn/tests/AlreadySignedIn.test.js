import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';

import { AlreadySignedIn } from '../AlreadySignedIn';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('Component AlreadySignedIn', () => {
  const handleSignoutRequest = jest.fn();
  const props = {
    handleSignoutRequest,
    isMissingRole: true,
  };
  it('should dispatch handleSignoutRequest when clicking on Link', () => {
    const wrapper = shallow(<AlreadySignedIn {...props} />);
    expect(handleSignoutRequest.mock.calls.length).toBe(0);
    wrapper.find(Link).at(2).simulate('click');
    expect(handleSignoutRequest.mock.calls.length).toBe(0);
  });
  it('should remain consistent if no change was intended', () => {
    const tree = renderer.create(<AlreadySignedIn {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
