import React from 'react';
import { connect } from 'react-redux';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Input,
  Icon,
  InputAdornment,
  Select,
  MenuItem,
} from 'material-ui';
import LeftNav from '~/src/shared/LeftNav';
import './styles.scss';
import { getProjectTypes } from '~/data/reducers';

class LeftFilterBar extends React.Component {
  static propTypes = {
    filters: PropTypes.shape({
      name: PropTypes.string,
      organizationName: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
    projectTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  handleNameChange = e => {
    this.props.onFilterChange('name', e.target.value);
  };

  handleOrganizationNameChange = e => {
    this.props.onFilterChange('organizationName', e.target.value);
  };

  handleProjectTypeChange = e => {
    this.props.onFilterChange('type', e.target.value);
  };

  render() {
    return (
      <LeftNav>
        <div className="drawer-input">
          <FormControl fullWidth>
            <InputLabel>Project Name</InputLabel>
            <Input
              type="text"
              value={this.props.filters.name}
              onChange={this.handleNameChange}
              endAdornment={
                <InputAdornment position="end">
                  <Icon>search</Icon>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="drawer-input">
          <FormControl fullWidth>
            <InputLabel>Organization Name</InputLabel>
            <Input
              type="text"
              value={this.props.filters.organizationName}
              onChange={this.handleOrganizationNameChange}
              endAdornment={
                <InputAdornment position="end">
                  <Icon>search</Icon>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="drawer-input">
          <FormControl>
            <InputLabel>Project Type</InputLabel>
            <Select
              value={this.props.filters.type}
              onChange={this.handleProjectTypeChange}
            >
              {this.props.projectTypes.map(type => (
                <MenuItem key={type} value={type}>
                  {capitalize(type)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="drawer-input">
          <FormControl>
            <InputLabel>Search Tag</InputLabel>
            <Select value="Test" />
          </FormControl>
        </div>
      </LeftNav>
    );
  }
}

export default connect(state => ({
  projectTypes: getProjectTypes(state),
}))(LeftFilterBar);
