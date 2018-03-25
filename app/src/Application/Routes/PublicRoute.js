import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import LocalStorage from '~/utilities/LocalStorage';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      LocalStorage.isAuthenticated() ? (
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

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  location: PropTypes.object,
};

export default PublicRoute;
