import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Grid, Chip, Button, Icon } from 'material-ui';
import { format } from 'date-fns';
import './styles.scss';

const Project = ({ name, tags, teamSize, pitch, completionDate }) => (
  <div className="project">
    <Paper elevation={1}>
      <Grid container>
        <Grid item xs={2}>
          <div className="image-placeholder">
            <span>image placeholder</span>
          </div>
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
            <Typography variant="title">{name}</Typography>
          </Grid>
          <Grid item xs={12}>
            {`${teamSize} developers`}
            {tags.map(tag => <Chip label={tag.name} key={tag.id} />)}
          </Grid>
          <Grid item xs={12}>
            <Typography>{pitch}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <div className="user-actions">
            {`By ${format(completionDate, 'MM/DD/YY')}`}
            <Button>Status</Button>
            <div>
              <Icon>favorite</Icon>
              <Icon>people</Icon>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  teamSize: PropTypes.number,
  pitch: PropTypes.string,
  completionDate: PropTypes.string,
};

export default Project;
