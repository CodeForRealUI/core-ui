import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocalStorage from '~/utilities/LocalStorage';
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
import { PublicRoute, PrivateRoute } from './Routes';

// Compose the root level routes here
class Application extends Component {
  componentDidMount() {
    LocalStorage.isAuthenticated() && this.props.dispatchUserRequest();
  }

  render() {
    return (
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
          <PrivateRoute path="/already-signed-in" component={AlreadySignedIn} />
          <PrivateRoute path="/verify-role" component={RolePicker} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute
            path="/bootcamp-grad-verify"
            component={BootCampRoleSignup}
          />
          <PrivateRoute
            path="/non-profit-verify"
            component={NonProfitRoleSignup}
          />
          <PrivateRoute path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

Application.propTypes = {
  dispatchUserRequest: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, dispatch => ({
    dispatchUserRequest: () => dispatch(userRequest()),
  }))(Application),
);
