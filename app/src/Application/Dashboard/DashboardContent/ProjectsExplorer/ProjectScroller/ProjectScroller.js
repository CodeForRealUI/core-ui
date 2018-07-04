import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { includes, throttle, isEqual, debounce, isEmpty } from 'lodash';
import { CircularProgress } from 'material-ui';
import noProjectsLogo from '~/public/images/icon-no-project.svg';
import { ITEMS_PER_PAGE } from '~/constants/pagination';
import { FILTERED } from '~/constants/projectFilters';
import Project from './Project';

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
    filters: PropTypes.shape({
      name: PropTypes.string,
      organizationName: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.checkScrollPosition = throttle(
      this.checkScrollPosition.bind(this),
      100,
    );

    this.loadFilteredProjects = debounce(this.loadFilteredProjects, 1000, {
      trailing: true,
    });
  }

  state = {
    currentPage: 1,
  };

  componentDidMount() {
    const { category, filters } = this.props;
    this.props.loadProjects(
      category,
      filters,
      this.state.currentPage,
      ITEMS_PER_PAGE,
    );
  }

  componentWillReceiveProps({ category, filters }) {
    this.handleCategoryChanged(category, filters);
    this.handleFiltersChanged(category, filters);
  }

  setScrollerRef = element => {
    this.projectScroller = element;
  };

  loadFilteredProjects = filters => {
    this.props.loadProjects(this.props.category, filters, 1, ITEMS_PER_PAGE);
  };

  hasNoFilters = filters =>
    Object.keys(filters).every(filter => isEmpty(filters[filter]));

  handleFiltersChanged = (category, filters) => {
    if (!isEqual(this.props.filters, filters) && !this.hasNoFilters(filters)) {
      this.setState({ currentPage: 1 });
      this.loadFilteredProjects(filters);
    }
  };

  handleCategoryChanged = (category, filters) => {
    if (this.props.category !== category && category !== FILTERED) {
      this.setState({ currentPage: 1 });
      this.props.loadProjects(category, filters, 1, ITEMS_PER_PAGE);
    }
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
      this.props.loadProjects(
        this.props.category,
        this.props.filters,
        nextPage,
        ITEMS_PER_PAGE,
      );
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
