import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import NavBarView from '~/src/shared/NavBarView';
import { BOOTSTRAP_DASHBOARD } from '~/data/actions/dashboard';
import LeftFilterBar from './LeftFilterBar';
import ProjectsExplorer from './ProjectsExplorer';
import './styles.scss';

export class Dashboard extends Component {
  static propTypes = {
    bootstrapDashboard: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.bootstrapDashboard();
  }

  renderLeftNav = () => <LeftFilterBar />;

  render() {
    return (
      <div className="dashboard-container">
        <NavBarView>
          <Route path="/" render={this.renderLeftNav} />
          <Route path="/" component={ProjectsExplorer} />
        </NavBarView>
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  bootstrapDashboard: () => dispatch({ type: BOOTSTRAP_DASHBOARD }),
}))(Dashboard);
