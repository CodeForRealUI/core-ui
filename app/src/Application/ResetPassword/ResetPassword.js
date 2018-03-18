import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, TextField, FormGroup } from 'material-ui';
import { Link } from 'react-router-dom';

import './styles.scss';

class ResetPassword extends Component {

  handleResetPassword(e) {
    this.props.resetPassword();
  }

  renderForm = () => (
    <div className="reset-password-fields">
      <form onSubmit={this.handleResetPassword}>
        <FormGroup>
          <TextField
            autoFocus
            id="email"
            fullWidth
            label="Email Address"
            required
          />
          <button
            className="reset-password-button"
          >
            Reset
          </button>
        </FormGroup>
      </form>
    </div>
  );

  render() {
    return (
      <div className="reset-password-container">
        <Paper className="reset-password-box" elevation={24}>
          <h1>Reset Password</h1>
          <div className="information-text">
            Please enter your email address and we will
            send you a link to reset your password.
          </div>
          {this.renderForm()}
        </Paper>
        <Link className="sign-in-link" to="/sign-in">
        Log In Instead
        </Link>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
};

export default connect(null, (dispatch) => ({
  resetPassword: (email) => {},
}))(ResetPassword);
