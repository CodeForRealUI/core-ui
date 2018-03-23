import React, { Component } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import NotFound from 'src/shared/NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import AlreadySignedIn from './AlreadySignedIn';
// Compose the root level routes here
class Application extends Component {
  isAuthenticated() {
    const token = localStorage.getItem('c4r-token'); // TODO, move the localStorage key to config
    return !!token;
  }

  PublicRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/already-signed-in',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  render() {
    return (
      <div className="application-container">
        <Switch>
          <this.PublicRoute path="/sign-in" component={SignIn} />
          <this.PublicRoute path="/sign-up" component={SignUp} />
          <this.PublicRoute
            path="/forgot-password"
            component={ForgotPassword}
          />
          {
            // todo move reset-password to isUathenticatned
          }
          <this.PublicRoute path="/reset-password" component={ResetPassword} />
          {/* Routes not requiring authentication above this line */}
          <this.PrivateRoute path="/already-signed-in" component={AlreadySignedIn} />
          <this.PrivateRoute path="/dashboard" component={Dashboard} />
          <this.PrivateRoute path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Application);
