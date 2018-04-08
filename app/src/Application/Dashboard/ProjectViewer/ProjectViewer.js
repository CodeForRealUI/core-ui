import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import './styles.scss';

class ProjectViewer extends Component {
  state = {
    activeTabIndex: 0,
  };

  handleTabChange = (event, value) => {
    this.setState({ activeTabIndex: value });
  };

  render() {
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
      </div>
    );
  }
}

export default ProjectViewer;
