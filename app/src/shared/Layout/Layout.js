import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import routes, { RecursiveRoutes } from '../../../../routes';
import NavBar from '../NavBar';
class Layout extends Component {

  componentWillReceiveProps(nextProps) {
    const { location: { pathname: currentPathname } } = this.props;
    const { location: { pathname: nextPathname } } = nextProps;
  }

  render() {
    const viewport =
        routes.map((route) => (
          <RecursiveRoutes
            key={route.path}
            {...route}
          />
        ));


    return (
      <div>
        <NavBar />
        {viewport}
      </div>
    );
  }
}

export default withRouter(Layout);
