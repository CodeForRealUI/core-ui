import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Link } from 'react-router-dom';
import './styles.scss';

function NavBarView({ children }) {
  return (
    <div className="nav-container">
      <AppBar position="static" color="inherit" elevation={2}>
        <Toolbar>
          <div className="logo-placeholder">
            <div className="logo">LOGO</div>
          </div>
          <Typography className="dashboard-title" color="inherit">
            <span className="dashboard-type">graduate dashboard</span>
          </Typography>
          <Link className="nav-bar-link" to="/new-project-form">
                New Project
            </Link>
          <Link className="nav-bar-link" to="/dashboard">
            Projects
          </Link>
          <Link className="nav-bar-link" to="/groups">
            Groups
          </Link>
        </Toolbar>
      </AppBar>
      <div className="content-container">{children}</div>
    </div>
  );
}

NavBarView.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default NavBarView;
