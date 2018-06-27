import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui';
import {
  getProjects,
  getIsProjectsLoading,
  getProjectCount,
  getFavoriteProjectIds,
} from '~/data/reducers';
import { ALL, MY_PROJECTS, FAVORITED } from '~/constants/projectFilters';
import {
  projectRequest,
  favoriteProjectRequest,
  unfavoriteProjectRequest,
} from '~/data/actions/project';
import ProjectScroller from './ProjectScroller';
import './styles.scss';

class ProjectsExplorer extends Component {
  static propTypes = {
    projects: PropTypes.array,
    projectsLoading: PropTypes.bool,
    loadProjects: PropTypes.func,
    favoriteProject: PropTypes.func,
    favoriteProjectIds: PropTypes.arrayOf(PropTypes.number),
    unfavoriteProject: PropTypes.func,
  };

  state = {
    activeTab: ALL,
  };

  handleTabChange = (event, value) => {
    setTimeout(() => {
      this.setState({ activeTab: value });
    }, 0);
  };

  render() {
    const {
      projects,
      projectCount,
      projectsLoading,
      favoriteProject,
      unfavoriteProject,
      favoriteProjectIds,
      loadProjects,
    } = this.props;
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
        <ProjectScroller
          projects={projects}
          projectCount={projectCount}
          isProjectsLoading={projectsLoading}
          favoriteProject={favoriteProject}
          unfavoriteProject={unfavoriteProject}
          favoriteProjectIds={favoriteProjectIds}
          category={this.state.activeTab}
          loadProjects={loadProjects}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    projects: getProjects(state),
    projectsLoading: getIsProjectsLoading(state),
    projectCount: getProjectCount(state),
    favoriteProjectIds: getFavoriteProjectIds(state),
  }),
  dispatch => ({
    loadProjects: (filter, page, perPage) =>
      dispatch(projectRequest(filter, page, perPage)),
    favoriteProject: id => dispatch(favoriteProjectRequest(id)),
    unfavoriteProject: id => dispatch(unfavoriteProjectRequest(id)),
  }),
)(ProjectsExplorer);
