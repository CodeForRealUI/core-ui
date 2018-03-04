import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Segment,
} from 'semantic-ui-react';

import routes, { RecursiveRoutes } from '../../routes';

class Layout extends Component {

  componentWillReceiveProps(nextProps) {
    const { location: { pathname: currentPathname } } = this.props;
    const { location: { pathname: nextPathname } } = nextProps;
  }

  render() {
    const navbar = (
      <Segment className="Navbar-segment" basic />
    );

    const viewport =
        routes.map((route, i) => (
          <RecursiveRoutes
            key={i}
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
