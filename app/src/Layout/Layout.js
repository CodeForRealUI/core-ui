import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';

import routes, { RecursiveRoutes } from '../../routes';
class Layout extends Component {

  render() {
    const viewport = (
      <Switch>
        { routes.map((route) => (
          <RecursiveRoutes
            key={route.path}
            {...route}
          />
        ))}
      </Switch>
    );


    return (
      <div>
        {viewport}
      </div>
    );
  }
}

export default withRouter(Layout);
