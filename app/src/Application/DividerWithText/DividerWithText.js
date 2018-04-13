import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DividerWithText = ({ text }) => (
  <div className="divider-with-text">
    { text }
  </div>
);

DividerWithText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default DividerWithText;
