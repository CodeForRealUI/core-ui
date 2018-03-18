import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import NotFound from 'src/shared/NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import ResetPassword from './ResetPassword';


// Compose the root level routes here
class Application extends Component {

  isAuthenticated() {
    const token = localStorage.getItem('c4r-auth-token'); // TODO, move the localStorage key to config
    return !!token;
  }

  render() {
    return (
      <div className="application-container">
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/forgot-password" component={ResetPassword} />
          {/* Routes not requiring authentication above this line */}
          {!this.isAuthenticated() && (<Redirect to="sign-in" />)}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Application);
