import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Paper,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from 'material-ui';
import { Link } from 'react-router-dom';

import LocalStorage, { KEYS } from '~/utilities/LocalStorage';
import Header from '../Header';
import DividerWithText from './DividerWithText';
import OAuthButton from '../OAuthButton';
import './styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: LocalStorage.get(KEYS.EMAIL),
      password: '',
      rememberMe: false,
    };
  }

  setRememberMe = (e, checked) => {
    checked && this.setState({ rememberMe: true });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleRememberMe = email => {
    LocalStorage.set(KEYS.EMAIL, email);
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  shouldDisableSignIn = () => !this.state.email || !this.state.password

  handleLogIn = () => {
    const { email, password, rememberMe } = this.state;
    rememberMe && this.handleRememberMe(email);
    this.props.login(email, password);
  };

  renderForm() {
    return (
      <div>
        <FormGroup row>
          <TextField
            autoFocus
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            fullWidth
            label="Email"
          />
        </FormGroup>
        <FormGroup row>
          <TextField
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            type="password"
            fullWidth
            label="Password"
          />
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            onChange={this.setRememberMe}
            label="Remember me"
            control={<Checkbox color="primary" />}
          />
          <Link className="forgot-password-link" to="/forgot-password">
            Forgot your password?
          </Link>
        </FormGroup>
        <Button variant="raised" className="login-button " disabled={this.shouldDisableSignIn()} onClick={this.handleLogIn}>
            Log In
        </Button>
        <DividerWithText text={'or connect with'} />
        <OAuthButton type="facebook" text="Sign in with Facebook" />
        <OAuthButton type="google" text="Sign in with Google" />
      </div>
    );
  }

  render() {
    return (
      <div className="sign-in-container">
        <Paper elevation={24} className="sign-in-box">
          <Header text="Sign In" />
          {this.renderForm()}
        </Paper>
        <Link className="sign-up-link" to="/sign-up">
          Create an Account
        </Link>
      </div>
    );
  }
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, dispatch => ({
  login: (email, password) =>
    dispatch({ type: 'LOGIN_REQUEST', email, password }),
}))(SignIn);
