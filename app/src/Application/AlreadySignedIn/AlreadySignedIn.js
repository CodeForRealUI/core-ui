import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';

import { signoutRequest } from '~/data/actions/signout';
import { getifMissingRole } from '~/data/reducers';
import './styles.scss';
import Header from '../Header/index';

export const AlreadySignedIn = ({ handleSignoutRequest, isMissingRole }) => {
  const redirectLink = isMissingRole ? '/verify-role' : '/dashboard';
  return (
    <div className="already-signed-in-container">
      <Paper className="already-signed-in-box" elevation={24}>
        <Header text="You are already signed in" />
        <button className="continue-to-dashboard-button">
          <Link className="continue-to-dashboard-link" to={redirectLink}>
          Continue to Dashboard
        </Link>
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
};
AlreadySignedIn.propTypes = {
  handleSignoutRequest: PropTypes.func.isRequired,
  isMissingRole: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    isMissingRole: getifMissingRole(state),
  }),
  dispatch => ({
    handleSignoutRequest: () => dispatch(signoutRequest()),
  }),
)(AlreadySignedIn);
