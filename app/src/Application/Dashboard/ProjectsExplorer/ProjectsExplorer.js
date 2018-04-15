import React, { Component } from 'react';
import { throttle, includes } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Tab, CircularProgress } from 'material-ui';
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
import noProjectsLogo from '~/public/images/icon-no-project.svg';
import Project from './Project';
import './styles.scss';

const ITEMS_PER_PAGE = 15;

class ProjectsExplorer extends Component {
  static propTypes = {
    projects: PropTypes.array,
    projectsLoading: PropTypes.bool,
    loadProjects: PropTypes.func,
    favoriteProject: PropTypes.func,
    projectCount: PropTypes.number,
    favoriteProjectIds: PropTypes.arrayOf(PropTypes.number),
    unfavoriteProject: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.checkScrollPosition = throttle(
      this.checkScrollPosition.bind(this),
      100,
    );
  }

  state = {
    activeTab: ALL,
    currentPage: 1,
  };

  componentDidMount() {
    const { activeTab, currentPage } = this.state;
    this.props.loadProjects(activeTab, currentPage, ITEMS_PER_PAGE);
  }

  componentDidUpdate(prevProps, prevState) {
    const { activeTab, currentPage } = this.state;
    if (
      prevState.activeTab !== activeTab ||
      prevState.currentPage === currentPage - 1
    ) {
      this.props.loadProjects(activeTab, currentPage, ITEMS_PER_PAGE);
    }
  }

  setScrollerRef = element => {
    this.projectScroller = element;
  };

  noMoreProjects() {
    const { projects, projectCount } = this.props;
    return projects.length === projectCount;
  }

  handleScroll = event => {
    event.persist();
    if (!this.noMoreProjects()) {
      this.checkScrollPosition(event);
    }
  };

  checkScrollPosition({ target }) {
    if (this.props.projectsLoading) {
      return;
    }
    const max = target.scrollHeight - target.offsetHeight;
    if (max - target.scrollTop <= 1000) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  handleTabChange = (event, value) => {
    this.projectScroller.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({ activeTab: value, currentPage: 1 });
    }, 0);
  };

  render() {
    const {
      projects,
      projectsLoading,
      favoriteProject,
      unfavoriteProject,
      favoriteProjectIds,
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
        <div
          className="projects-container"
          onScroll={this.handleScroll}
          ref={this.setScrollerRef}
        >
          {projects.length === 0 && (
            <img src={noProjectsLogo} alt="no projects found" />
          )}
          {projects.map(project => (
            <Project
              key={project.id}
              isFavorited={includes(favoriteProjectIds, project.id)}
              favoriteProject={favoriteProject}
              unfavoriteProject={unfavoriteProject}
              {...project}
            />
          ))}
          {projectsLoading && (
            <div className="project-spinner">
              <div className="project-spinner">
                <CircularProgress size={50} />
              </div>
            </div>
          )}
        </div>
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
