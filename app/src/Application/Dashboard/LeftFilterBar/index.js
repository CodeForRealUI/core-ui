import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Icon,
  InputAdornment,
  Select,
} from 'material-ui';
import './styles.scss';

class LeftFilterBar extends React.Component {
  state = {
    name: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="left-nav">
        <div className="nav-content">
          <div className="drawer-input">
            <FormControl fullWidth>
              <InputLabel>Project Name</InputLabel>
              <Input
                type="text"
                value={this.state.name}
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
        </div>
      </div>
    );
  }
}

export default LeftFilterBar;
