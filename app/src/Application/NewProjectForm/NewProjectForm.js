import React from 'react';
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Slide,
  Card,
  CardActions,
  Radio,
  FormControlLabel,
  TextField,
  Paper,
} from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { Grow } from 'material-ui/transitions';
import { Link } from 'react-router-dom';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
  } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';


// images
import teamMember from '~/public/images/team-member.png';
import webLogo from '~/public/images/web-design.png';
import smartPhone from '~/public/images/smartphone.png';
import programmingCode from '~/public/images/programming-code.png';

import Header from '../Header';
import './styles.scss';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target1.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Dialog
          fullScreen
          open
          onClose={this.handleClose}
          transition={Transition}
        >
          <Toolbar>
            <Link to="/dashboard">
              <Button onClick={this.handleClose}>go back</Button>
            </Link>
          </Toolbar>
          <Header text="New Project Form" />
          <div>
            <div className="form-container">
              <div className="cards-container">
                <Card className="card">
                  <div className="card-content">
                    <img className="img" src={webLogo} alt="website" />
                    <CardActions>
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Website"
                      />
                    </CardActions>
                  </div>
                </Card>
                <Card className="card">
                  <div className="card-content">
                    <img className="img" src={smartPhone} alt="smart phone" />
                    <CardActions>
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Mobile"
                      />
                    </CardActions>
                  </div>
                </Card>
                <Card className="card">
                  <div className="card-content">
                    <img className="img" src={programmingCode} alt="code" />
                    <CardActions>
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Other"
                      />
                    </CardActions>
                  </div>
                </Card>
              </div>
              <TextField fullWidth label="Enter Your Project Name" />
              <TextField fullWidth label="Description" />
              <Manager className="tags-button">
                <Target>
                  <div
                    ref={node => {
                      this.target1 = node;
                    }}
                  >
                    <Button
                      mini
                      aria-owns={open ? 'menu-list-grow' : null}
                      aria-haspopup="true"
                      onClick={this.handleToggle}
                    >
                      Search Tags
                    </Button>
                  </div>
                </Target>
                <Popper placement="bottom-start" eventsEnabled={open}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <Grow
                      in={open}
                      id="menu-list-grow"
                      style={{ transformOrigin: '0 0 0' }}
                    >
                      <Paper className="tag-container">
                        <div className="tag-content">
                          Popular Tags
                          <FormControl>
                            <InputLabel>Add a new tag</InputLabel>
                            <Input
                              endAdornment={
                                <InputAdornment position="end">
                                  Add
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                        </div>
                      </Paper>
                    </Grow>
                  </ClickAwayListener>
                </Popper>
              </Manager>
              <InputLabel>Feature here</InputLabel>
              <Input
                fullWidth
                endAdornment={
                  <InputAdornment position="end">Add</InputAdornment>
                }
              />
              <List>
                {this.generate(
                  <ListItem>
                    <ListItemText
                      primary="Feature Requirement Goes here"
                    />
                    <ListItemSecondaryAction>
                      <i className="material-icons">delete</i>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
              <TextField
                label="Estimated Completion Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              >Estimated Completion Data
              </TextField>
              <div className="cards-container">
                <Card className="card">
                  <div className="card-content">
                    <img className="img" src={teamMember} alt="team member" />
                    <CardActions>
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="1 Developer"
                      />
                    </CardActions>
                  </div>
                </Card>
                <Card className="card">
                  <div className="card-content">
                    <div className="images">
                      <img src={teamMember} alt="team member" />
                      <img src={teamMember} alt="team member" />
                    </div>
                    <CardActions>
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="2-3 Developers"
                      />
                    </CardActions>
                  </div>
                </Card>
                <Card className="card">
                  <div className="card-content">
                    <div className="images">
                      <img src={teamMember} alt="team member" />
                      <img src={teamMember} alt="team member" />
                      <img src={teamMember} alt="team member" />
                      <img src={teamMember} alt="team member" />
                    </div>
                    <CardActions>
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="4-5 Developers"
                      />
                    </CardActions>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {};

export default FullScreenDialog;
