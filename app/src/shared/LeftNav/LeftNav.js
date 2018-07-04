import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LeftNav = ({ children }) => (
  <div className="left-nav">
    <div className="nav-content">{children}</div>
  </div>
);

LeftNav.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default LeftNav;
