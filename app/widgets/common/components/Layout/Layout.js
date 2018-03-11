import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Segment,
} from 'semantic-ui-react';

import routes, { RecursiveRoutes } from '../../routes';

class Layout extends Component {

  static propTypes = {
    location: PropTypes.object,
  }

  render() {
    const navbar = (
      <Segment className="Navbar-segment" basic />
    );

    const viewport =
        routes.map((route) => (
          <RecursiveRoutes
            key={route.path}
            {...route}
          />
        ));


    const footer = (
      <Container className="footer" fluid />
    );

    return (
      <section ref={this.handleContext}>
        <Container className="main" fluid>
          {navbar}
          {viewport}
          {footer}
        </Container>
      </section>
    );
  }
}

export default withRouter(Layout);
