import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';

function ScreenHeader({ title }) {
  return (
    <Segment.Group>
      <Segment attached="top" inverted>
        <Header as="h3">
          {title}
        </Header>
      </Segment>
    </Segment.Group>
  );
}

ScreenHeader.propTypes = {
  title: PropTypes.string,
};

export default ScreenHeader;
