import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ text }) => (
  <h1 className="header">{ text }</h1>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
