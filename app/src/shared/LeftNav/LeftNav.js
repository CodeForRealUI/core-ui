import React from 'react';
import './styles.scss';

const LeftNav = ({ children }) => (
  <div className="left-nav">
    <div className="nav-content">{children}</div>
  </div>
);

export default LeftNav;
