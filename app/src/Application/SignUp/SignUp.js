import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, TextField, FormGroup, Grid } from 'material-ui';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

import { mustMatch, minLength, validName } from '~/validators';
import { run, ruleRunner } from '~/validators/ruleRunner';
import { signupRequest } from '../../../data/actions/signup';
import Header from '../Header';
import DividerWithText from '../DividerWithText';
import OAuthButton from '../OAuthButton';
import './styles.scss';

const fieldValidations = [
  ruleRunner('firstName', 'name', validName),
  ruleRunner('lastName', 'lastName', validName),
  ruleRunner('password1', 'password', minLength(8)),
  ruleRunner('password2', 'passwords', mustMatch('password1', 'Password')),
];

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
      validationErrors: {},
    };
  }

  getIfShouldDisableSignUp = () => {
    if (!isEmpty(this.state.validationErrors)) {
      return true;
    }
    if (!this.state.password1 || !this.state.password2) {
      return true;
    }
    return false;
  };

  handleSignUp = e => {
    e.preventDefault();
    this.setState({ showErrors: true });
    if (!isEmpty(this.state.validationErrors)) {
      return null;
    }
    const {
      password1,
      password2,
      firstName,
      lastName,
      email,
      phone,
    } = this.state;
    // todo removing the +1 hack whenever we go international - this is to pass the backend validation.
    const signUpData = {
      firstName,
      lastName,
      email,
      password: password1,
      passwordConfirmation: password2,
      mobileNumber: phone && `1${phone}`,
    };
    return this.props.signup(signUpData);
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
  /* eslint-disable react/no-unescaped-entities */
  renderForm = () => (
    <div className="sign-up-fields">
      <form onSubmit={this.handleSignUp}>
        <Grid container>
          <Grid item xs={6}>
            <FormGroup>
              <TextField
                autoFocus
                onChange={this.handleFieldChanged('firstName')}
                value={this.state.firstName}
                id="first-name"
                fullWidth
                label="First name"
                error={!!this.errorFor('firstName')}
                required
              />
              <TextField
                onChange={this.handleFieldChanged('lastName')}
                error={!!this.errorFor('lastName')}
                value={this.state.lastName}
                id="last-name"
                fullWidth
                label="Last Name"
                required
              />
              <TextField
                onChange={this.handleFieldChanged('email')}
                value={this.state.email}
                id="email-address"
                fullWidth
                label="Email Address"
                type="email"
                required
              />
              <TextField
                onChange={this.handleFieldChanged('phone')}
                value={this.state.phone}
                id="mobile-number"
                type="tel"
                fullWidth
                label="Mobile Number"
              />
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    id="password"
                    type="password"
                    label="Password"
                    required
                    onChange={this.handleFieldChanged('password1')}
                    error={!!this.errorFor('password1')}
                    value={this.state.password1}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="confirmed-password"
                    type="password"
                    label="Confirm"
                    required
                    onChange={this.handleFieldChanged('password2')}
                    error={!!this.errorFor('password2')}
                    value={this.state.password2}
                  />
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <DividerWithText text={'or connect with'} />
            <OAuthButton type="facebook" text="Sign up with Facebook" />
            <OAuthButton type="google" text="Sign up with Google" />
            <p className="legal-text">
              By signing in, I acknowledge and agree to Codeforreal's{' '}
              <strong> Terms of Use </strong>and{' '}
              <strong>Privacy Policy.</strong>
            </p>
            <button
              disabled={this.getIfShouldDisableSignUp()}
              className="sign-up-button"
              onSubmit={this.handleSignUp}
            >
              Sign Up
            </button>
          </Grid>
        </Grid>
      </form>
    </div>
  );

  render() {
    return (
      <div className="sign-up-container">
        <Paper className="sign-up-box" elevation={24}>
          <Header text="Sign Up" />
          {this.renderForm()}
        </Paper>
        <Link className="sign-in-link" to="/sign-in">
          Log In Instead
        </Link>
      </div>
    );
  }
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default connect(null, dispatch => ({
  signup: signupData => dispatch(signupRequest(signupData)),
}))(SignUp);
