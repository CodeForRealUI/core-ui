import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';

import { signoutRequest } from '~/data/actions/signout';
import './styles.scss';

const AlreadySignedIn = ({ handleSignoutRequest }) => (
  <div className="already-signed-in-container">
    <Paper className="already-signed-in-box" elevation={24}>
      <Link className="continue-to-dashboard-link" to="/dashboard">
        Continue to Dashboard
      </Link>
      <button onClick={handleSignoutRequest}>Sign Out Instead</button>
    </Paper>
  </div>
);
AlreadySignedIn.propTypes = {
  handleSignoutRequest: PropTypes.func.isRequired,
};

export default connect(null, dispatch => ({
  handleSignoutRequest: () => dispatch(signoutRequest()),
}))(AlreadySignedIn);
