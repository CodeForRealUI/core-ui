
import React from 'react';
import { Route } from 'react-router-dom';

import BASIC_SCREENS from './basicScreens';

export const RecursiveRoutes = (route) => (
  <Route
    path={route.path}
    render={(props) => (
      <route.component
        {...props}
        {...route.additionalProps}
        routes={route.routes}
      />
      )}
  />
  );

export default [...BASIC_SCREENS];
