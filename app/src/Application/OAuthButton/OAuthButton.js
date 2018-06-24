import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'material-ui';

import facebookIcon from '~/public/images/facebook-logo.png';
import googleIcon from '~/public/images/google-logo.png';
import './styles.scss';

const oauthRedirectPage = 'oauth-sign-in';

const typeMap = {
  facebook: {
    link: origin =>
      `https://damp-beyond-45634.herokuapp.com/auth/facebook?auth_origin_url=${origin}/${oauthRedirectPage}`,
    img: facebookIcon,
    style: 'facebook-button',
  },
  google: {
    link: origin =>
      `https://damp-beyond-45634.herokuapp.com/auth/google_oauth2?auth_origin_url=${origin}/${oauthRedirectPage}`,
    img: googleIcon,
    style: 'google-button',
  },
};

export const OAuthButton = ({ type, text }) => {
  const { link, img, style } = typeMap[type];
  const callBackUrl = link(window.origin);
  return (
    <Button href={callBackUrl} className={style} variant="raised">
      <Grid container>
        <Grid item xs={2}>
          <img src={img} alt="oauth sign in" />
        </Grid>
        <Grid item xs={1}>
          <div className="vl" />
        </Grid>
        <Grid item xs={7}>
          <div className="button-text"> {text} </div>
        </Grid>
      </Grid>
    </Button>
  );
};

OAuthButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default OAuthButton;
