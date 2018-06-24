import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { BootCampRoleSignup } from '../BootCampRoleSignup';

describe('Component BootCampRoleSignup', () => {
  const handleRolePickRequest = jest.fn();
  const props = {
    handleRolePickRequest,
  };
  it('should dispatch handleRolePickRequest firing onHandleRolePickRequest with this.state.code as payload', () => {
    const wrapper = shallow(<BootCampRoleSignup {...props} />);
    expect(handleRolePickRequest.mock.calls.length).toBe(0);
    wrapper.setState({
      code: '123',
    });
    const event = {
      preventDefault() {
        return '';
      },
    };
    wrapper.instance().onHandleRolePickRequest(event);
    expect(handleRolePickRequest.mock.calls.length).toBe(1);
    expect(handleRolePickRequest.mock.calls[0][0]).toEqual({
      school_code: '123',
    });
  });
  it('should setState on firing onEnterCode with an event', () => {
    const wrapper = shallow(<BootCampRoleSignup {...props} />);
    const event = {
      target: {
        value: '123',
      },
    };
    wrapper.instance().onEnterCode(event);
    expect(wrapper.instance().state).toEqual({
      code: '123',
    });
  });
  it('should enable the button if state.code is >= 24 ', () => {
    const wrapper = shallow(<BootCampRoleSignup {...props} />);
    wrapper.setState({
      code: [].length = 24,
    });
    expect(wrapper.find('button').props().disabled).toBe(false);
  });
  it('should disable the button if state.code is < 24 ', () => {
    const wrapper = shallow(<BootCampRoleSignup {...props} />);
    wrapper.setState({
      code: '123',
    });
    expect(wrapper.find('button').props().disabled).toBe(true);
  });

  it('should fire off the onHandleRolePickRequest when button is clicked', () => {
    handleRolePickRequest.mockReset();
    const wrapper = shallow(<BootCampRoleSignup {...props} />);
    expect(handleRolePickRequest.mock.calls.length).toBe(0);
    wrapper.setState({
      code: '321',
    });
    wrapper.find('button').simulate('submit', {
      preventDefault() {
        return '';
      },
    });
    expect(handleRolePickRequest.mock.calls.length).toBe(1);
    expect(handleRolePickRequest.mock.calls[0][0]).toEqual({
      school_code: '321',
    });
  });
  it('should remain consistent if no change was intended', () => {
    const tree = renderer.create(<BootCampRoleSignup {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
