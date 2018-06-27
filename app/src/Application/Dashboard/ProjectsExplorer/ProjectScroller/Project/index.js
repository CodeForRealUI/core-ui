import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Paper, Typography, Grid, Chip, Button, Icon } from 'material-ui';
import { format } from 'date-fns';
import './styles.scss';

const Project = ({
  id,
  name,
  tags,
  favoriteProject,
  unfavoriteProject,
  isFavorited,
  quickBlurb,
}) => {
  function handleFavoriteClick() {
    return isFavorited ? unfavoriteProject(id) : favoriteProject(id);
  }
  return (
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
              {tags.map(tag => <Chip label={tag.name} key={tag.id} />)}
            </Grid>
            <Grid item xs={12}>
              <Typography>{quickBlurb}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <div className="user-actions">
              <Link className="status-link" to={`/project-status/${id}`}><Button>Status</Button></Link>
              <div>
                <Icon color={isFavorited ? 'secondary' : 'disabled'} onClick={handleFavoriteClick}>favorite</Icon>
                <Icon>people</Icon>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  quickBlurb: PropTypes.string,
  favoriteProject: PropTypes.func,
  id: PropTypes.number,
  isFavorited: PropTypes.bool,
  unfavoriteProject: PropTypes.func,
};

export default Project;
