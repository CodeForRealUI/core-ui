import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FormControl,
  InputLabel,
  Input,
  Icon,
  InputAdornment,
  Select,
} from 'material-ui';
import { projectRequest } from '~/data/actions/project';
import { ITEMS_PER_PAGE } from '~/constants/pagination';
import LeftNav from '~/src/shared/LeftNav';
import './styles.scss';

class LeftFilterBar extends React.Component {
  static propTypes = {
    filters: PropTypes.shape({
      name: PropTypes.string,
      organizationName: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  handleNameChange = e => {
    this.props.onFilterChange('name', e.target.value);
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
            <Select value="Test" />
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

export default connect(
  null,
  dispatch => ({
    loadProjects: () =>
      dispatch(projectRequest(category, filters, page, ITEMS_PER_PAGE)),
  }),
)(LeftFilterBar);
