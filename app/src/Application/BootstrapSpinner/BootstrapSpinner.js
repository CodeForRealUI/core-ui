import React from 'react';
import Spinner from '~/src/shared/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsBootstrapping } from '~/data/reducers';

const BootstrapSpinner = ({ isBootstrapping }) => (
  isBootstrapping ? <Spinner /> : null
);

BootstrapSpinner.propTypes = {
  isBootstrapping: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isBootstrapping: getIsBootstrapping(state),
});

export default connect(mapStateToProps)(BootstrapSpinner);
