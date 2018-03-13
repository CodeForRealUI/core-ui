import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import './styles.scss';
import Spinner from 'src/shared/Spinner';
import { Paper, TextField, Grid, Checkbox, FormGroup, FormControlLabel, Button } from 'material-ui';
import { Link } from 'react-router-dom'

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogIn = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  renderForm() {
    return (
      <div>
        <FormGroup row>
          <TextField id="email" value={this.state.email} onChange={this.handleEmailChange} fullWidth label="Email"/>
        </FormGroup>
        <FormGroup row>
          <TextField id="password" value={this.state.password} onChange={this.handlePasswordChange} type="password" fullWidth label="Password"/>
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox color="primary" />
            }
          />
          <Link className="forgot-password-link" to="/forgot-password">Forgot your password?</Link>
        </FormGroup>
        <FormGroup row>
            <Button variant="raised" className="test" onClick={this.handleLogIn}>Log In</Button>
        </FormGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="sign-in-container">
          <Paper zDepth={1} className="sign-in-box">
            <h1>Sign In</h1>
            {this.renderForm()}
          </Paper>
      </div>
    );
  }
}

SignIn.propTypes = {
};

export default connect(null, dispatch => ({
  login: (email, password) => dispatch({ type: 'LOGIN_REQUEST', email, password })
}))(SignIn);
