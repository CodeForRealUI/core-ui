import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Paper,
  TextField,
  FormGroup,
  Grid,
} from 'material-ui';

import { passwordValidator, passwordAgainValidator } from 'validators';
import { signupRequest } from '../../../data/actions/signup';
import './styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmedPassword: '',
      passwordHelperText: '',
      passwordAgainHelperText: '',
    };
  }

  handleSignUp = (e) => {
    e.preventDefault();
    this.props.signup();
  }

  handlePasswordChange = async (e) => {
    e.persist();
    try {
      await passwordValidator.validate(e.target.value);
      this.setState({ passwordHelperText: '' });
    } catch (error) {
      this.setState({ passwordHelperText: error.message });
    }
  }

  handleConfirmationPasswordChange = async (e) => {
    e.persist();
    try {
      await passwordAgainValidator.validate(this.state.password, e.target.value);
      this.setState({ passwordAgainHelperText: '' });
    } catch (error) {
      this.setState({ passwordAgainHelperText: error.message });
    }
  }

  renderForm = () => (
    <div className="sign-up-fields">
      <form onSubmit={this.handleSignUp}>
        <FormGroup>
          <TextField
            id="first-name"
            fullWidth
            label="First name"
            required
          />
          <TextField
            id="last-name"
            fullWidth
            label="Last Name"
            required
          />
          <TextField
            id="email-address"
            fullWidth
            label="Email Address"
            type="email"
            required
          />
          <TextField
            id="mobile-number"
            type="tel"
            fullWidth
            label="Mobile Number"
            required
          />
          <Grid container>
            <Grid item xs={6}>
              <TextField
                id="password"
                type="password"
                label="Password"
                required
                onChange={this.handlePasswordChange}
                helperText={this.state.passwordHelperText}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="confirmed-password"
                type="password"
                label="Confirm"
                required
                onChange={this.handleConfirmationPasswordChange}
                helperText={this.state.passwordAgainHelperText}
              />
            </Grid>
          </Grid>
          <button className="sign-up-button"> Sign Up </button>
        </FormGroup>
      </form>
    </div>
    )

  render() {
    return (
      <div className="sign-up-container">
        <Paper className="sign-up-box">
          <h1>Sign Up</h1>
          {this.renderForm()}
        </Paper>
      </div>
    );
  }
}

SignUp.propTypes = {};

export default connect(null, (dispatch) => ({
  signup: (signupData) => dispatch(signupRequest(signupData)),
}))(SignUp);
