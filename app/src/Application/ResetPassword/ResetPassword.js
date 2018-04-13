import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, TextField, FormGroup, Grid } from 'material-ui';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { passwordResetRequest } from '~/data/actions/forgotPassword';
import { mustMatch, minLength } from '~/validators';
import { run, ruleRunner } from '~/validators/ruleRunner';
import './styles.scss';

const fieldValidations = [
  ruleRunner('password', 'password', minLength(8)),
  ruleRunner(
    'confirmedPassword',
    'passwords',
    mustMatch('password', 'Password'),
  ),
];

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
      validationErrors: {},
    };
  }

  getIfShouldDisableResetButton = () => {
    if (!isEmpty(this.state.validationErrors)) {
      return true;
    }
    if (!this.state.password || !this.state.confirmedPassword) {
      return true;
    }
    return false;
  };

  handleResetPassword = e => {
    e.preventDefault();
    this.setState({ showErrors: true });
    if (!isEmpty(this.state.validationErrors)) {
      return null;
    }
    const { password, confirmedPassword } = this.state;
    return this.props.resetPassword(password, confirmedPassword);
  };

  handleFieldChanged(field) {
    return e => {
      const newState = {
        ...this.state,
        [field]: e.target.value.trim(),
      };
      newState.validationErrors = run(newState, fieldValidations);
      this.setState(newState);
    };
  }

  errorFor(field) {
    return this.state.validationErrors[field];
  }

  renderForm = () => (
    <div className="reset-password-fields">
      <form onSubmit={this.handleResetPassword}>
        <FormGroup>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                id="password"
                type="password"
                label="Password"
                required
                onChange={this.handleFieldChanged('password')}
                error={!!this.errorFor('password')}
                value={this.state.password}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="confirmed-password"
                type="password"
                label="Confirm"
                required
                onChange={this.handleFieldChanged('confirmedPassword')}
                error={!!this.errorFor('confirmedPassword')}
                value={this.state.confirmedPassword}
              />
            </Grid>
          </Grid>
          <button
            disabled={this.getIfShouldDisableResetButton()}
            className="reset-password-button"
            onSubmit={this.handleResetPassword}
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
          <h1>New Password</h1>
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

export default connect(null, dispatch => ({
  resetPassword: (password, confirmedPassword) =>
    dispatch(passwordResetRequest(password, confirmedPassword)),
}))(ResetPassword);
