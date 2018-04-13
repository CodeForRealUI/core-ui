import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui';
import Spinner from '~/src/shared/Spinner';
import { getProjects, getIsProjectsLoading } from '~/data/reducers';
import Project from './Project';
import './styles.scss';

class ProjectsExplorer extends Component {
  static propTypes = {
    projects: PropTypes.array,
    projectsLoading: PropTypes.bool,
  };

  state = {
    activeTabIndex: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ activeTabIndex: value });
  };

  render() {
    const { projects, projectsLoading } = this.props;
    return (
      <div className="project-viewer">
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={this.state.activeTabIndex}
          onChange={this.handleTabChange}
          centered
        >
          <Tab label="All Projects" />
          <Tab label="My Projects" />
          <Tab label="Favorite Projects" />
          <Tab label="Requested Projects" />
        </Tabs>
        {projectsLoading ? (
          <Spinner />
        ) : (
          <div className="projects-container">
            {projects.map(project => <Project key={project.id} {...project} />)}
          </div>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  projects: getProjects(state),
  projectsLoading: getIsProjectsLoading(state),
}))(ProjectsExplorer);
