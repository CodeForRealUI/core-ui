import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { includes, throttle } from 'lodash';
import { CircularProgress } from 'material-ui';
import noProjectsLogo from '~/public/images/icon-no-project.svg';

import Project from './Project';

const ITEMS_PER_PAGE = 15;

class ProjectScroller extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    category: PropTypes.string.isRequired,
    loadProjects: PropTypes.func.isRequired,
    projectCount: PropTypes.number.isRequired,
    isProjectsLoading: PropTypes.bool.isRequired,
    favoriteProject: PropTypes.func.isRequired,
    unfavoriteProject: PropTypes.func.isRequired,
    favoriteProjectIds: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.checkScrollPosition = throttle(
      this.checkScrollPosition.bind(this),
      100,
    );
  }

  state = {
    currentPage: 1,
  };

  componentDidMount() {
    const { category } = this.props;
    this.props.loadProjects(category, this.state.currentPage, ITEMS_PER_PAGE);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.category !== nextProps.category) {
      this.setState({ currentPage: 1 });
      this.props.loadProjects(nextProps.category, 1, ITEMS_PER_PAGE);
    }
  }

  setScrollerRef = element => {
    this.projectScroller = element;
  };

  noMoreProjects() {
    const { projects, projectCount } = this.props;
    return projects.length === projectCount;
  }

  checkScrollPosition({ target }) {
    if (this.props.isProjectsLoading) {
      return;
    }
    const max = target.scrollHeight - target.offsetHeight;
    if (max - target.scrollTop <= 1000) {
      const nextPage = this.state.currentPage + 1;
      this.setState({ currentPage: nextPage });
      this.props.loadProjects(this.props.category, nextPage, ITEMS_PER_PAGE);
    }
  }

  handleScroll = event => {
    event.persist();
    if (!this.noMoreProjects()) {
      this.checkScrollPosition(event);
    }
  };

  render() {
    const {
      projects,
      isProjectsLoading,
      favoriteProject,
      unfavoriteProject,
      favoriteProjectIds,
    } = this.props;

    return (
      <div
        className="projects-container"
        onScroll={this.handleScroll}
        ref={this.setScrollerRef}
      >
        {projects.map(project => (
          <Project
            key={project.id}
            isFavorited={includes(favoriteProjectIds, project.id)}
            favoriteProject={favoriteProject}
            unfavoriteProject={unfavoriteProject}
            {...project}
          />
        ))}
        {projects.length === 0 &&
          !isProjectsLoading && (
            <img src={noProjectsLogo} alt="no projects found" />
          )}
        {isProjectsLoading && (
          <div className="project-spinner">
            <div className="project-spinner">
              <CircularProgress size={50} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectScroller;
