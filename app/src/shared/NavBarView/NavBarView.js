import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { Link } from 'react-router-dom';
import logo from '~/public/images/Logo.png';
import './styles.scss';

function NavBarView({ children }) {
  return (
    <div className="nav-container">
      <AppBar position="static" color="inherit" elevation={2}>
        <Toolbar>
          <div className="logo-placeholder">
            <img alt="logo" src={logo} />
          </div>
          <div className="right-nav-links">
            <Link className="nav-bar-link" to="/dashboard">
              Projects
            </Link>
            <Link className="nav-bar-link" to="/groups">
              Groups
            </Link>
          </div>
          <Typography className="dashboard-title" color="inherit">
            <span className="dashboard-type">graduate dashboard</span>
          </Typography>
          <Link to="/new-project-form">
                npo
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
