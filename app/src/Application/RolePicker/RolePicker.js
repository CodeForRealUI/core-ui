import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardContent, Typography, Card } from 'material-ui';
import { Link } from 'react-router-dom';

import npo from '~/public/images/npo.png';
import dev from '~/public/images/dev.png';
import { getFirstName } from '~/data/reducers';
import './styles.scss';


const RolePicker = ({ firstName }) => (
  <div className="verify-role-container">
    <h1 className="title">Hi {firstName}, choose your role </h1>
    <div className="role-cards">
      <Link to="/bootcamp-grad-verify">
        <Card className="role-card" >
          <CardContent>
            <img className="image" src={dev} alt="non profit" />
            <Typography component="p">
              <p className="link" >{"I'm a Bootcamp graduate"}</p>
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Link to="/non-profit-verify">
        <Card className="role-card">
          <CardContent>
            <img className="image" src={npo} alt="bootcamp graduate" />
            <Typography className="link" component="p">
              <p>{"I'm a Non-Profit organization"}</p>
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
