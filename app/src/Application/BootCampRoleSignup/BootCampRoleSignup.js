import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, TextField, FormGroup } from 'material-ui';
// import { Link } from 'react-router-dom';

import { rolePickRequest } from '~/data/actions/rolePicker';
import './styles.scss';

class BootCampRoleSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }
  onHandleRolePickRequest = e => {
    e.preventDefault();
    const payload = {
      school_code: this.state.code,
    };
    this.props.handleRolePickRequest(payload);
  };

  onEnterCode = e => {
    const { value } = e.target;
    this.setState({
      code: value,
    });
  };

  renderForm = () => (
    <div className="bootcamp-graduate-signup-fields">
      <form onSubmit={this.onHandleRolePickRequest}>
        <FormGroup>
          <TextField
            autoFocus
            fullWidth
            placeholder="Enter your code"
            required
            onChange={this.onEnterCode}
          />
          <button
            className="continue-button"
            disabled={this.state.code.length < 24}
            onClick={this.onHandleRolePickRequest}
          >
            Continue
          </button>
        </FormGroup>
      </form>
    </div>
  );

  render() {
    return (
      <div className="bootcamp-graduate-signup-container">
        <Paper className="bootcamp-graduate-signup-box" elevation={24}>
          <h1>Bootcamp Graduate Signup</h1>
          {this.renderForm()}
        </Paper>
      </div>
    );
  }
}

BootCampRoleSignup.propTypes = {
  handleRolePickRequest: PropTypes.func.isRequired,
};

export default connect(null, dispatch => ({
  handleRolePickRequest: code => dispatch(rolePickRequest(code)),
}))(BootCampRoleSignup);
