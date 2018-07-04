import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { isEqual } from 'lodash';
import NavBarView from '~/src/shared/NavBarView';
import { ALL, FILTERED } from '~/constants/projectFilters';
import LeftFilterBar from './LeftFilterBar';
import ProjectsExplorer from './ProjectsExplorer';

const initialFilterState = {
  name: '',
  organizationName: '',
  tags: [],
  type: '',
};

class DashboardContent extends Component {
  state = {
    activeCategory: ALL,
    filters: {
      ...initialFilterState,
    },
  };

  handleCategoryChange = (event, value) => {
    this.setState({ activeCategory: value, filters: initialFilterState });
  };

  handleFilterChange = (filter, value) => {
    if (this.state.activeCategory !== FILTERED) {
      this.setState(() => ({ activeCategory: FILTERED }));
    }
    this.setState(
      previous => ({
        filters: {
          ...previous.filters,
          [filter]: value,
        },
      }),
      () => {
        if (isEqual(this.state.filters, initialFilterState)) {
          this.setState({ activeCategory: ALL });
        }
      },
    );
  };

  renderLeftNav = () => (
    <LeftFilterBar
      filters={this.state.filters}
      onFilterChange={this.handleFilterChange}
    />
  );

  renderProjectsExplorer = () => (
    <ProjectsExplorer
      category={this.state.activeCategory}
      filters={this.state.filters}
      onCategoryChange={this.handleCategoryChange}
    />
  );

  render() {
    return (
      <NavBarView>
        <Route path="/" render={this.renderLeftNav} />
        <Route path="/" render={this.renderProjectsExplorer} />
      </NavBarView>
    );
  }
}

export default DashboardContent;
