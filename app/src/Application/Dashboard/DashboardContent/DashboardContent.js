import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBarView from '~/src/shared/NavBarView';
import LeftFilterBar from './LeftFilterBar';
import ProjectsExplorer from './ProjectsExplorer';

class DashboardContent extends Component {
  renderLeftNav = () => <LeftFilterBar />;

  render() {
    return (
      <NavBarView>
        <Route path="/" render={this.renderLeftNav} />
        <Route path="/" component={ProjectsExplorer} />
      </NavBarView>
    );
  }
}

export default DashboardContent;
