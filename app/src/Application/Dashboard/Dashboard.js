import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BOOTSTRAP_DASHBOARD } from '~/data/actions/dashboard';
import DashboardContent from './DashboardContent';
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
      <div className="dashboard-container">
        <DashboardContent />
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  bootstrapDashboard: () => dispatch({ type: BOOTSTRAP_DASHBOARD }),
}))(Dashboard);
