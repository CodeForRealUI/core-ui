import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Paper, TextField, FormGroup, Grid } from "material-ui";
import { isEmpty } from "lodash";

import { mustMatch, minLength } from "src/validators";
import { run, ruleRunner } from "src/validators/ruleRunner.js";
import { signupRequest } from "../../../data/actions/signup";
import "./styles.scss";

const fieldValidations = [
  ruleRunner("password1", "password", minLength(8)),
  ruleRunner("password2", "passwords", mustMatch("password1", "Password"))
];

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false,
      validationErrors: {}
    };
  }

  getIfShouldDisableSignUp = () => {
    if (!isEmpty(this.state.validationErrors)) {
      return true;
    }
    if (!this.state.password1 || !this.state.password2) {
      return true;
    }
  };

  handleSignUp = e => {
    e.preventDefault();
    this.setState({ showErrors: true });
    if (!isEmpty(this.state.validationErrors)) {
      return null;
    }
    const { password1, password2, firstName, lastName, email } = this.state
    const signUpData = {
      name: `${firstName} ${lastName}`,
      email,
      password: password1,
      password_confirmation: password2
    }
    this.props.signup(signUpData);
  };

  handleFieldChanged(field) {
    return e => {
      let newState = {
        ...this.state,
        [field]: e.target.value
      };
      newState.validationErrors = run(newState, fieldValidations);
      this.setState(newState);
    };
  }

  errorFor(field) {
    return this.state.validationErrors[field] || "";
  }

  renderForm = () => (
    <div className="sign-up-fields">
      <form onSubmit={this.handleSignUp}>
        <FormGroup>
          <TextField
            onChange={this.handleFieldChanged("firstName")}
            id="first-name"
            fullWidth
            label="First name"
            required
          />
          <TextField
            onChange={this.handleFieldChanged("lastName")}
            id="last-name"
            fullWidth
            label="Last Name"
            required
          />
          <TextField
            onChange={this.handleFieldChanged("email")}
            id="email-address"
            fullWidth
            label="Email Address"
            type="email"
            required
          />
          <TextField
            onChange={this.handleFieldChanged("phone")}
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
                onChange={this.handleFieldChanged("password1")}
                error={!!this.errorFor("password1")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="confirmed-password"
                type="password"
                label="Confirm"
                required
                onChange={this.handleFieldChanged("password2")}
                error={!!this.errorFor("password2")}
              />
            </Grid>
          </Grid>
          <button
            disabled={this.getIfShouldDisableSignUp()}
            className="sign-up-button"
          >
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
  signup: PropTypes.func.isRequired
};

export default connect(null, dispatch => ({
  signup: signupData => dispatch(signupRequest(signupData))
}))(SignUp);
