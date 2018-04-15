import React, { Component } from 'react';
import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui';
import Spinner from '~/src/shared/Spinner';
import {
  getProjects,
  getIsProjectsLoading,
  getProjectCount,
} from '~/data/reducers';
import { ALL, MY_PROJECTS, FAVORITED } from '~/constants/projectFilters';
import { projectRequest, favoriteProjectRequest } from '~/data/actions/project';
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
  };

  constructor(props) {
    super(props);
    this.checkScrollPosition = throttle(
      this.checkScrollPosition.bind(this),
      500,
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

  handleScroll = event => {
    event.persist();
    this.checkScrollPosition(event);
  };

  checkScrollPosition({ target }) {
    const { projects, projectCount } = this.props;
    if (projects.length === projectCount) {
      return;
    }
    const max = target.scrollHeight - target.offsetHeight;
    if (max === target.scrollTop) {
      const { currentPage } = this.state;
      const nextPage = currentPage + 1;
      this.setState({ currentPage: nextPage });
    }
  }

  handleTabChange = (event, value) => {
    this.projectScroller.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({ activeTab: value, currentPage: 1 });
    }, 0);
  };

  render() {
    const { projects, projectsLoading, favoriteProject } = this.props;
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
          {projects.map(project => (
            <Project
              key={project.id}
              favoriteProject={favoriteProject}
              {...project}
            />
          ))}
          {projectsLoading && <Spinner />}
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
  }),
  dispatch => ({
    loadProjects: (filter, page, perPage) =>
      dispatch(projectRequest(filter, page, perPage)),
    favoriteProject: id => dispatch(favoriteProjectRequest(id)),
  }),
)(ProjectsExplorer);
