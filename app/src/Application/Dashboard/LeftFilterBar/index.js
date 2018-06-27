import React from 'react';
import {
  Drawer,
  FormControl,
  InputLabel,
  Input,
  Icon,
  InputAdornment,
  Select,
} from 'material-ui';
import './styles.scss';

const LeftFilterBar = () => (
  <Drawer variant="permanent">
    <div>
      <div className="drawer-input">
        <FormControl fullWidth>
          <InputLabel>Project Name</InputLabel>
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
  </Drawer>
);

export default LeftFilterBar;
