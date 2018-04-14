import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui';
import Spinner from '~/src/shared/Spinner';
import { getProjects, getIsProjectsLoading } from '~/data/reducers';
import { ALL, MY_PROJECTS, FAVORITED } from '~/constants/projectFilters';
import { projectRequest } from '~/data/actions/project';
import Project from './Project';
import './styles.scss';

class ProjectsExplorer extends Component {
  static propTypes = {
    projects: PropTypes.array,
    projectsLoading: PropTypes.bool,
    loadProjects: PropTypes.bool,
  };

  state = {
    activeTab: ALL,
  };

  componentDidMount() {
    this.props.loadProjects(this.state.activeTab);
  }

  handleTabChange = (event, value) => {
    this.setState({ activeTab: value }, () => this.props.loadProjects(value));
  };

  render() {
    const { projects, projectsLoading } = this.props;
    return (
      <div className="project-viewer">
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={this.state.activeTab}
          onChange={this.handleTabChange}
          centered
        >
          <Tab label="All Projects" value={ALL} />
          <Tab label="My Projects" value={MY_PROJECTS} />
          <Tab label="Favorite Projects" value={FAVORITED} />
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
}), dispatch => ({
  loadProjects: filter => dispatch(projectRequest(filter)),
}))(ProjectsExplorer);
