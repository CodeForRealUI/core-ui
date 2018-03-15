import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { first, tail } from 'lodash';
import { connect } from 'react-redux';
import routes from '../../routes';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import RenderIf from '../shared/RenderIf';

class Layout extends Component {

  isAuthenticated() {
    const token = sessionStorage.getItem('c4r-auth-token');
    return !!token;
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path={first(routes).path} component={first(routes).component} />
          <RenderIf predicate={this.isAuthenticated()}>
            <Switch>
              {tail(routes).map(({ path, component, ...props }) => (
                <Route key={path} path={path} component={component} {...props} />
              ))}
              <Route path="" component={NotFound} />              
            </Switch>
          </RenderIf>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Layout);