import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import NavBar from 'src/shared/NavBar';
import { BOOTSTRAP_DASHBOARD } from '~/data/actions//dashboard';
import LeftFilterBar from './LeftFilterBar';
import './styles.scss';

export class Dashboard extends Component {
  static propTypes = {
    bootstrapDashboard: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.bootstrapDashboard();
  }

  render() {
    return (
      <div>
        <Route path="/" component={NavBar} />
        <Route path="/" component={LeftFilterBar} />
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  bootstrapDashboard: () => dispatch({ type: BOOTSTRAP_DASHBOARD }),
}))(Dashboard);
