import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';

import routes, { RecursiveRoutes } from '../../routes';
import './styles.scss';
class Layout extends Component {

  render() {
    const viewport = (
      <div className="viewport-wrapper">
        <Switch>
          { routes.map((route) => (
            <RecursiveRoutes
              key={route.path}
              {...route}
            />
        ))}
        </Switch>
      </div>
    );


    return (
      <div>
        {viewport}
      </div>
    );
  }
}

export default withRouter(Layout);
