import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Link } from 'react-router-dom';
import './styles.scss';

function NavBar() {
  return (
    <div className="nav-container">
      <AppBar position="static" color="white">
        <Toolbar>
          <div className="logo-placeholder">
            <div className="logo">LOGO</div>
          </div>
          <Typography className="dashboard-title" color="inherit">
            <span className="dashboard-type">graduate dashboard</span>
          </Typography>
          <Link className="nav-bar-link" to="/dashboard">
            Projects
          </Link>
          <Link className="nav-bar-link" to="/groups">
            Groups
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;
