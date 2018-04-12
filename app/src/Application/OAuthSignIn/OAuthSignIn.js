import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from 'src/shared/Spinner';
import { oauthLoginRequest } from '~/data/actions/login';

/*
*technically not a view
*but we need a route to handle the oauth logic since its a redirect from the oauth source
*/
export class OAuthLogin extends Component {
  componentWillMount() {
    this.props.handleOauthLoginRequest();
  }

  render() {
    return (
      <Spinner />
    );
  }
}
OAuthLogin.propTypes = {
  handleOauthLoginRequest: PropTypes.func.isRequired,
};

export default connect(null, {
  handleOauthLoginRequest: oauthLoginRequest,
})(OAuthLogin);
