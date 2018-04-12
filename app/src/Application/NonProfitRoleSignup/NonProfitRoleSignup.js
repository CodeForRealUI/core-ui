import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Paper, TextField, FormGroup, Grid, MenuItem, FormControl, InputLabel, Select } from 'material-ui';

import { rolePickRequest } from '~/data/actions/rolePicker';
import Header from '~/src/Application/Header';

import './styles.scss';

class NonProfitRoleSignup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organizationName: '',
      websiteAddress: '',
      contactNumber: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      organizationEmail: '',
      category: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { organizationName, websiteAddress, contactNumber, address1, address2, city, state, zipcode, organizationEmail, category } = this.state;
    const payload = {
      organizationAttributes: {
        name: organizationName,
        address: `${address1} ${address2}`,
        city,
        state,
        zipcode,
        phone: contactNumber,
        website: websiteAddress,
        email: organizationEmail,
        category,
      },
    };
    return this.props.handleRolePickRequest(payload);
  };

  handleFieldChanged(field) {
    return (e) => {
      this.setState({
        ...this.state,
        [field]: e.target.value,
      });
    };
  }

  renderForm = () => (
    <form onSubmit={this.handleSubmit}>
      <FormGroup>
        <h4 className="subheading">Organization Information</h4>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              autoFocus
              onChange={this.handleFieldChanged('organizationName')}
              value={this.state.organizationName}
              label="Organization name"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <TextField
              label="Website address"
              required
              onChange={this.handleFieldChanged('websiteAddress')}
              value={this.state.websiteAddress}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <TextField
              onChange={this.handleFieldChanged('contactNumber')}
              value={this.state.contactNumber}
              label="Contact Number"
              type="tel"
              required
            />
          </Grid>
          <Grid item xs={6} >
            <FormControl >
              {/* todo make a required field for Submit */}
              <InputLabel required htmlFor="category">Category</InputLabel>
              <Select
                value={this.state.category}
                onChange={this.handleFieldChanged('category')}
                inputProps={{
                  name: 'category',
                }}
              >
                <MenuItem value={'Animal'}>Animal</MenuItem>
                <MenuItem value={'Environmental'}>Environmental</MenuItem>
                <MenuItem value={'Health'}>Health</MenuItem>
                <MenuItem value={'Education'}>Education</MenuItem>
                <MenuItem value={'Arts and Culture'}>Arts and Culture</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <TextField
              onChange={this.handleFieldChanged('organizationEmail')}
              value={this.state.organizationEmail}
              label="Organization Email"
              type="email"
              required
            />
          </Grid>
        </Grid>
        <h4 className="subheading">Address Information</h4>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TextField
              onChange={this.handleFieldChanged('address1')}
              value={this.state.address1}
              label="Address 1"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Address 2"
              onChange={this.handleFieldChanged('address2')}
              value={this.state.address2}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              onChange={this.handleFieldChanged('city')}
              value={this.state.city}
              label="City"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="State"
              required
              onChange={this.handleFieldChanged('state')}
              value={this.state.state}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="zipcode"
              required
              onChange={this.handleFieldChanged('zipcode')}
              value={this.state.zipcode}
            />
          </Grid>
        </Grid>
        <button
          // todo check for the entire form and dont rely on html validation
          disabled={!this.state.category}
          className="submit-button"
        >
          Submit
          </button>
      </FormGroup>
    </form>
  )

  render() {
    return (
      <div className="non-profit-role-sign-up-container">
        <Paper className="non-profit-role-sign-up-box" elevation={24}>
          <Header text="Non-Profit Sign Up Form" />
          {this.renderForm()}
        </Paper>
      </div>
    );
  }
}

NonProfitRoleSignup.propTypes = {
  handleRolePickRequest: PropTypes.func.isRequired,
};

export default connect(null, {
  handleRolePickRequest: rolePickRequest,
})(NonProfitRoleSignup);
