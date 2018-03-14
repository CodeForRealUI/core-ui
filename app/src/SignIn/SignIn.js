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

import DividerWithText from './DividerWithText';
import './styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }

  getLocalStorageEmail = () => localStorage.getItem('codeforrealemail') || '';

  setRememberMe = (e, checked) => {
    checked && this.setState({ rememberMe: true });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleRememberMe = (email) => {
    localStorage.setItem('codeforrealemail', email);
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

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
            id="email"
            defaultValue={this.getLocalStorageEmail()}
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
        <FormGroup row>
          <Button variant="raised" className="test" onClick={this.handleLogIn}>
            Log In
          </Button>
        </FormGroup>
        {/* <DividerWithText text={'or connect with'} />
        <FormGroup row>
          <Button variant="raised" className="sign-in-with-facebook-button">
            Sign in with Facebook
          </Button>
          <Button variant="raised" className="sign-in-with-google-button">
            Sign in with Google{' '}
          </Button>
        </FormGroup> */}
      </div>
    );
  }

  render() {
    return (
      <div className="sign-in-container">
        <Paper elevation={24} className="sign-in-box">
          <h1>Sign In</h1>
          {this.renderForm()}
        </Paper>
        <Link className="sign-up-link" to="/sign-up">
        Create an Account
        </Link>
      </div>
    );
  }
}

SignIn.propTypes = {};

export default connect(null, (dispatch) => ({
  login: (email, password) =>
    dispatch({ type: 'LOGIN_REQUEST', email, password }),
}))(SignIn);
