import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui';
import {
  getProjects,
  getIsProjectsLoading,
  getProjectCount,
  getFavoriteProjectIds,
} from '~/data/reducers';
import {
  projectRequest,
  favoriteProjectRequest,
  unfavoriteProjectRequest,
} from '~/data/actions/project';
import {
  ALL,
  MY_PROJECTS,
  FAVORITED,
  REQUESTED,
  FILTERED,
} from '~/constants/projectFilters';
import ProjectScroller from './ProjectScroller';
import './styles.scss';

const ProjectsExplorer = ({
  projects,
  projectCount,
  projectsLoading,
  favoriteProject,
  unfavoriteProject,
  favoriteProjectIds,
  loadProjects,
  onCategoryChange,
  category,
  filters,
}) => (
  <div className="project-viewer">
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      value={category !== FILTERED ? category : ALL}
      onChange={onCategoryChange}
      centered
    >
      <Tab label="All Projects" value={ALL} />
      <Tab label="My Projects" value={MY_PROJECTS} />
      <Tab label="Requested Projects" value={REQUESTED} />
      <Tab label="Favorite Projects" value={FAVORITED} />
    </Tabs>
    <ProjectScroller
      projects={projects}
      projectCount={projectCount}
      isProjectsLoading={projectsLoading}
      favoriteProject={favoriteProject}
      unfavoriteProject={unfavoriteProject}
      favoriteProjectIds={favoriteProjectIds}
      category={category}
      loadProjects={loadProjects}
      filters={filters}
    />
  </div>
);

ProjectsExplorer.propTypes = {
  projects: PropTypes.array,
  projectsLoading: PropTypes.bool,
  loadProjects: PropTypes.func,
  favoriteProject: PropTypes.func,
  favoriteProjectIds: PropTypes.arrayOf(PropTypes.number),
  unfavoriteProject: PropTypes.func,
  projectCount: PropTypes.number,
  onCategoryChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  filters: PropTypes.shape({
    name: PropTypes.string,
    organizationName: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
  }).isRequired,
};

export default connect(
  state => ({
    projects: getProjects(state),
    projectsLoading: getIsProjectsLoading(state),
    projectCount: getProjectCount(state),
    favoriteProjectIds: getFavoriteProjectIds(state),
  }),
  dispatch => ({
    loadProjects: (category, filters, page, perPage) =>
      dispatch(projectRequest(category, filters, page, perPage)),
    favoriteProject: id => dispatch(favoriteProjectRequest(id)),
    unfavoriteProject: id => dispatch(unfavoriteProjectRequest(id)),
  }),
)(ProjectsExplorer);
