
import React from 'react';
import { Route } from 'react-router-dom';

import HOME_SCREENS from './homeScreens';

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

export default [...HOME_SCREENS];
