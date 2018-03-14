import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, TextField, FormGroup, Grid } from 'material-ui';

import { passwordValidator, passwordAgainValidator } from 'validators';
import { signupRequest } from '../../../data/actions/signup';
import './styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmedPassword: '',
      passwordError: false,
      passwordAgainerror: false,
    };
  }

  getIfShouldDisableSignUp = () => {
    const { password, confirmedPassword, passwordError, passwordAgainerror } = this.state;
    if (!password || !confirmedPassword || passwordError || passwordAgainerror) {
      return true;
    }
    return false;
  }
  handleSignUp = (e) => {
    e.preventDefault();
    this.props.signup();
  };

  handlePasswordChange = async (e) => {
    e.persist();
    try {
      await passwordValidator.validate(e.target.value);
      this.setState({ passwordError: false });
    } catch (error) {
      this.setState({ passwordError: true });
    }
    this.setState({ password: e.target.value });
  };

  handleConfirmationPasswordChange = async (e) => {
    e.persist();
    try {
      await passwordAgainValidator.validate({
        password: this.state.password,
        confirmationPassword: e.target.value,
      });
      this.setState({ passwordAgainerror: false });
    } catch (error) {
      this.setState({ passwordAgainerror: true });
    }
    this.setState({ confirmedPassword: e.target.value });
  };

  renderForm = () => (
    <div className="sign-up-fields">
      <form onSubmit={this.handleSignUp}>
        <FormGroup>
          <TextField
            id="first-name"
            fullWidth
            label="First name"
            required
            margin="normal"
          />
          <TextField
            id="last-name"
            fullWidth
            label="Last Name"
            required
            margin="normal"
          />
          <TextField
            id="email-address"
            fullWidth
            label="Email Address"
            type="email"
            required
            margin="normal"
          />
          <TextField
            id="mobile-number"
            type="tel"
            fullWidth
            label="Mobile Number"
            required
            margin="normal"
          />
          <Grid container>
            <Grid item xs={6}>
              <TextField
                id="password"
                type="password"
                label="Password"
                required
                onChange={this.handlePasswordChange}
                error={this.state.passwordError}
                helperText="at least 6 characters"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="confirmed-password"
                type="password"
                label="Confirm"
                required
                onChange={this.handleConfirmationPasswordChange}
                error={this.state.passwordAgainerror}
                margin="normal"
              />
            </Grid>
          </Grid>
          <button disabled={this.getIfShouldDisableSignUp()} className="sign-up-button">
            Sign Up
          </button>
        </FormGroup>
      </form>
    </div>
  );

  render() {
    return (
      <div className="sign-up-container">
        <Paper className="sign-up-box" elevation={24}>
          <h1>Sign Up</h1>
          {this.renderForm()}
        </Paper>
      </div>
    );
  }
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default connect(null, (dispatch) => ({
  signup: (signupData) => dispatch(signupRequest(signupData)),
}))(SignUp);
