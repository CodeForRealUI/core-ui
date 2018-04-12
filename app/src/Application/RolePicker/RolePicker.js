import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardContent, Typography, Card } from 'material-ui';
import { Link } from 'react-router-dom';

import npo from '~/public/images/npo.png';
import dev from '~/public/images/dev.png';
import { getFirstName } from '~/data/reducers';
import { rolePickBootstrapRequest } from '~/data/actions/bootstrap';
import './styles.scss';

class RolePicker extends Component {

  componentWillMount() {
    this.props.handleBootstrap();
  }

   /* eslint-disable react/no-unescaped-entities */
  render() {
    return (<div className="verify-role-container">
      <h1 className="title">Hi {this.props.firstName}, choose your role </h1>
      <div className="role-cards">
        <Link to="/bootcamp-grad-verify">
          <Card className="role-card" >
            <CardContent>
              <img className="image" src={dev} alt="non profit" />
              <Typography className="link" component="p">
                {"I'm a Bootcamp graduate"}
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/non-profit-verify">
          <Card className="role-card">
            <CardContent>
              <img className="image" src={npo} alt="bootcamp graduate" />
              <Typography className="link" component="p">
                I'm a Non-Profit organization
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>);
  }
}

RolePicker.propTypes = {
  firstName: PropTypes.string,
  handleBootstrap: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  firstName: getFirstName(state),
});

export default connect(mapStateToProps, {
  handleBootstrap: rolePickBootstrapRequest,
})(RolePicker);
