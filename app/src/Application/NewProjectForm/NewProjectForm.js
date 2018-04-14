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
} from 'material-ui';
import { Link } from 'react-router-dom';

// images
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

  handleClose = () => {
    // todo
  };

  render() {
    return (
      <div>
        <Dialog
          fullScreen
          open
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar position="static">
            <Toolbar>
              <Link to="/dashboard">
                <Button onClick={this.handleClose}>close</Button>
              </Link>
            </Toolbar>
          </AppBar>
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
            </div>
          </div>
        </Dialog>
      </div>

    );
  }
}

FullScreenDialog.propTypes = {};

export default FullScreenDialog;
