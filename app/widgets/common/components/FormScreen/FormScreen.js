import React from 'react';
import { Responsive, Container, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ScreenHeader from '../ScreenHeader/Loadable';
import AbstractForm from '../AbstractForm/Loadable';

function FormScreen({ screenHeader, abstractForm }) {
  const header = <ScreenHeader {...screenHeader} />;
  const form = <AbstractForm {...abstractForm} />;

  return (
    <Container fluid>
      <Responsive as={Container} maxWidth={Responsive.onlyTablet.maxWidth}>
        <div className="mobile">
          {header}
          {form}
        </div>
      </Responsive>
      <Responsive
        as={Container}
        minWidth={Responsive.onlyComputer.minWidth}
        fluid
      >
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} stretched>
              {header}
            </Grid.Column>
            <Grid.Column width={8}>{form}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    </Container>
  );
}
FormScreen.propTypes = {
  screenHeader: PropTypes.element,
  abstractForm: PropTypes.object,
};

export default FormScreen;
