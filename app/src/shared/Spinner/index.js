import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

import './styles.scss';

const Spinner = () => (
  <CircularProgress className="spinner" size={50} color="secondary" thickness={7} />
);

export default Spinner;
