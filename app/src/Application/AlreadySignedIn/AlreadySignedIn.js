import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';

import { signoutRequest } from '~/data/actions/signout';
import './styles.scss';
import Header from '../Header';
const AlreadySignedIn = ({ handleSignoutRequest }) => (
  <div className="already-signed-in-container">
    <Paper className="already-signed-in-box" elevation={24}>
      <Header text="You are already signed in" />
      <button className="continue-to-dashboard-button">
        <Link className="continue-to-dashboard-link"to="/dashboard"> Continue to Dashboard</Link>
      </button>
    </Paper>
    <Link
      onClick={handleSignoutRequest}
      className="sign-out-link"
      to="/sign-in"
    >
      Sign Out Instead
    </Link>
  </div>
);
AlreadySignedIn.propTypes = {
  handleSignoutRequest: PropTypes.func.isRequired,
};

export default connect(null, dispatch => ({
  handleSignoutRequest: () => dispatch(signoutRequest()),
}))(AlreadySignedIn);
