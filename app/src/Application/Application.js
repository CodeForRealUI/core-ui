import React from 'react';
import { withRouter, Switch } from 'react-router-dom';


import NotFound from 'src/shared/NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import AlreadySignedIn from './AlreadySignedIn';
import { PublicRoute, PrivateRoute } from './Routes';

// Compose the root level routes here
const Application = () => (
  <div className="application-container">
    <Switch>
      <PublicRoute path="/sign-in" component={SignIn} />
      <PublicRoute path="/sign-up" component={SignUp} />
      <PublicRoute path="/forgot-password" component={ForgotPassword} />
      {
        // todo move reset-password to isUathenticatned
      }
      <PublicRoute path="/reset-password" component={ResetPassword} />
      {/* Routes not requiring authentication above this line */}
      <PrivateRoute
        path="/already-signed-in"
        component={AlreadySignedIn}
      />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="" component={NotFound} />
    </Switch>
  </div>
);

export default withRouter(Application);
