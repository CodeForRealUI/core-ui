import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CssBaseline } from 'material-ui';

import { userRequest } from '~/data/actions/user';

import NotFound from 'src/shared/NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import AlreadySignedIn from './AlreadySignedIn';
import RolePicker from './RolePicker';
import BootCampRoleSignup from './BootCampRoleSignup';
import NonProfitRoleSignup from './NonProfitRoleSignup';
import OAuthBootstrap from './OAuthBootstrap';
import { PublicRoute, PrivateRoute } from './Routes';
// Compose the root level routes here
const Application = () => (
  <CssBaseline>
    <Switch>
      <PublicRoute path="/sign-in" component={SignIn} />
      <PublicRoute path="/sign-up" component={SignUp} />
      <PublicRoute path="/forgot-password" component={ForgotPassword} />
      {
        // todo move reset-password to isUathenticatned
      }
      <PublicRoute path="/reset-password" component={ResetPassword} />
      <PublicRoute path="/oauth-sign-in" component={OAuthBootstrap} />
      {/* Routes not requiring authentication above this line */}
      <PrivateRoute path="/already-signed-in" component={AlreadySignedIn} />
      <PrivateRoute path="/verify-role" component={RolePicker} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute
        path="/bootcamp-grad-verify"
        component={BootCampRoleSignup}
      />
      <PrivateRoute path="/non-profit-verify" component={NonProfitRoleSignup} />
      <PrivateRoute path="" component={NotFound} />
    </Switch>
  </CssBaseline>
);

Application.propTypes = {
  dispatchUserRequest: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, {
    dispatchUserRequest: userRequest,
  })(Application),
);
