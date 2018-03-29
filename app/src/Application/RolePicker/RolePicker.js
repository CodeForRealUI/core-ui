import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardMedia, CardContent, Typography, Card } from 'material-ui';
import { Link } from 'react-router-dom';

import { getFirstName } from '~/data/reducers';
import './styles.scss';

const RolePicker = ({ firstName }) => (
  <div className="verify-role-container">
    <h1 className="title">Hi {firstName}, choose your role </h1>
    <div className="role-cards">
      <Link to="/bootcamp-grad-verify">
        <Card className="role-card" >
          <CardMedia
            image="~/public/images/npo.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
          Im a bootcamp grad
          </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link to="/non-profit-verify">
        <Card className="role-card">
          <CardMedia
            image="~/public/images/npo.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
          Im a non profit
          </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  </div>
);

RolePicker.propTypes = {
  firstName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  firstName: getFirstName(state),
});

export default connect(mapStateToProps)(RolePicker);
