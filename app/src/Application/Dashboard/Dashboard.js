import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from 'src/shared/NavBar';
import './styles.scss';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={NavBar} />
      </div>
    );
  }
}

export default Dashboard;
