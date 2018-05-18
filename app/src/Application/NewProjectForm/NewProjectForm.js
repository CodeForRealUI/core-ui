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

const cards = [
  {
    label: 'Website',
    alt: 'Website',
    img: webLogo,
  },
  {
    label: 'Mobile',
    alt: 'Mobile',
    img: smartPhone,
  },
  {
    label: 'Other',
    alt: 'Other',
    img: programmingCode,
  },
];

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderProjectCards = () =>
    cards.map(({ label, alt, img }) => (
      <Card className="card" key={label}>
        <div className="card-content">
          <img className="img" src={img} alt={alt} />
          <CardActions>
            <FormControlLabel
              control={<Radio color="primary" />}
              label={label}
            />
          </CardActions>
        </div>
      </Card>
    ));

  render() {
    return (
      <div>
        <Dialog
          fullScreen
          open
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar color="default">
            <Toolbar>
              <Link to="/dashboard">
                <Button className="go-back-button" onClick={this.handleClose}>
                  go back
                </Button>
              </Link>
            </Toolbar>
          </AppBar>

          <div className="form-container">
            <Header text="New Project Form" />
            <div className="new-project-form-content">
              <strong> Project Type </strong>
              <div className="cards-container">{this.renderProjectCards()}</div>
              <TextField fullWidth label="Enter Your Project Name" />
              <TextField fullWidth label="Description" />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {};

export default FullScreenDialog;
