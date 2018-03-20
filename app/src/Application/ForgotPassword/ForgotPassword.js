import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, TextField, FormGroup } from 'material-ui';
import { Link } from 'react-router-dom';

import { passwordResetEmailRequest } from '~/data/actions/forgotPassword';
import './styles.scss';

const ForgotPassword = ({ handlePasswordResetEmailRequest }) => {
  const handleForgotPassword = e => {
    e.preventDefault();
    handlePasswordResetEmailRequest(e.target.email.value);
  };

  const renderForm = () => (
    <div className="forgot-password-fields">
      <form onSubmit={handleForgotPassword}>
        <FormGroup>
          <TextField
            autoFocus
            id="email"
            fullWidth
            label="Email Address"
            required
            type="email"
          />
          <button className="forgot-password-button">Reset</button>
        </FormGroup>
      </form>
    </div>
  );

  return (
    <div className="forgot-password-container">
      <Paper className="forgot-password-box" elevation={24}>
        <h1>Reset Password</h1>
        <div className="information-text">
          Please enter your email address and we will send you a link to reset
          your password.
        </div>
        {renderForm()}
      </Paper>
      <Link className="sign-in-link" to="/sign-in">
        Log In Instead
      </Link>
    </div>
  );
};

ForgotPassword.propTypes = {
  handlePasswordResetEmailRequest: PropTypes.func.isRequired,
};

export default connect(null, dispatch => ({
  handlePasswordResetEmailRequest: email =>
    dispatch(passwordResetEmailRequest(email)),
}))(ForgotPassword);
