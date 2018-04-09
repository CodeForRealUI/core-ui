import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from 'src/shared/Spinner';
import { oauthBootstrapRequest } from '~/data/actions/oauthBootstrap';

export class OAuthBootstrap extends Component {
  componentWillMount() {
    this.props.handleOAuthBootStrap();
  }

  render() {
    return (
      <Spinner />
    );
  }
}
OAuthBootstrap.propTypes = {
  handleOAuthBootStrap: PropTypes.func.isRequired,
};

export default connect(null, {
  handleOAuthBootStrap: oauthBootstrapRequest,
})(OAuthBootstrap);
